import React, { useState } from 'react';

import { Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import './profile-picture.styles.css';

const ProfilePicture = ({ profilePictureURL }) => {
  const [imageUrl, setImageURL] = useState(null);

  // const style = {
  //   backgroundImage: `url(${imageUrl})`,
  // };

  const handleClick = () => {
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.multiple = false;
    imageInput.accept = 'image/*';

    imageInput.click();

    imageInput.onchange = () => {
      const uploadedImage = imageInput.files[0];

      if (
        uploadedImage.type.includes('image/') &&
        uploadedImage.size <= 5242880
      ) {
        const blob = new Blob([uploadedImage]);
        const imageUrl = URL.createObjectURL(blob);

        setImageURL(imageUrl);
      } else {
        alert('The selected file should an image and should not exceed 5MB');
      }
    };
  };

  return (
    <div className="profilepicture">
      <Avatar src={imageUrl} />

      <div className="profilepicture__overlay" onClick={handleClick}>
        <CameraAltIcon />
        <span>Choose an image</span>
      </div>
    </div>
  );
};

export default ProfilePicture;

// const fileInput = document.createElement('input');
//   fileInput.type = 'file';
//   fileInput.multiple = false;
//   fileInput.accept = 'image/*';

//   fileInput.click();

//   fileInput.onchange = () => {
//     const uploadedImage = fileInput.files[0];

//     if (validImageTypes.includes(uploadedImage.type)) {
//       const blob = new Blob([fileInput.files[0]]);
//       const imageUrl = URL.createObjectURL(blob);
