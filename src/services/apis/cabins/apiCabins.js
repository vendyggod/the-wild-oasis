import supabase from '../../supabase';
import { supabaseUrl } from '../../supabase/supabase';

export async function getCabins() {
  const { data, error } = await supabase.from('cabins').select('*');

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }

  return data;
}

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    '/',
    ''
  );
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1) Create cabin
  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin, image: imagePath }]);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be created');
  }

  // 2) Upload image to the storage
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .upload(imageName, newCabin.image);

  // 3) If there is an error uploading image - delete the cabin row
  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data.id);
    throw new Error(
      'Could not create a cabin since there is an error with image uploading'
    );
  }

  return data;
}

export async function deleteCabin(id) {
  // 1) Get cabin object based on ID with only image key {image: 'url'} to delete
  // the assosiated image in a storage before we delete the cabin row from the database
  const { data: cabinImageUrl, error: cabinError } = await supabase
    .from('cabins')
    .select('image') // Выбираем только поле image
    .eq('id', id)
    .single(); // Возвращаем только одну строку

  if (cabinError) {
    console.error(cabinError);
    throw new Error('Cabin could not be deleted');
  }

  // 2) Delete the image
  const cabinImageName = cabinImageUrl.image.split('/').at(-1);
  const { error: storageError } = await supabase.storage
    .from('cabin-images')
    .remove([cabinImageName]);

  if (storageError) {
    console.error(storageError);
    throw new Error('Cabin could not be deleted');
  }

  // 3) Delete the cabin row based on cabin ID
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabin could not be deleted');
  }
}
