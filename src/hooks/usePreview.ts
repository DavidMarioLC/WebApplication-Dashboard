import { useState, useRef, ChangeEvent } from 'react';

export const usePreview = () => {
  const [previewImage, SetPreviewImage] = useState({
    nameImage: '',
    urlImage: '',
  });
  const fileRef = useRef<HTMLInputElement>(null);

  const handleOnclickUpload = () => {
    if (!fileRef.current) return;
    fileRef.current.click();
  };

  const handlerChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files!['0'];
    const nameImage = file.name;
    const urlImage = URL.createObjectURL(file);
    localStorage.setItem('img', urlImage);
    SetPreviewImage({
      ...previewImage,
      nameImage,
      urlImage,
    });
  };

  const resetPreview = () => {
    SetPreviewImage({
      nameImage: '',
      urlImage: '',
    });
  };

  return {
    previewImage,
    fileRef,
    handleOnclickUpload,
    handlerChangeFile,
    resetPreview,
  };
};
