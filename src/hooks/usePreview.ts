import { useState, useRef, ChangeEvent } from 'react';
import { TPreview } from '../types/types';

export const usePreview = (image: TPreview) => {
  const [previewImage, SetPreviewImage] = useState<TPreview>(image);
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
    SetPreviewImage,
  };
};
