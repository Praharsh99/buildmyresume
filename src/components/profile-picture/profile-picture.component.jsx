import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { default as storage } from '../../firebase/firebase';

import { Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { selectProfilePicture } from '../../redux/resume/resume.selectors';
import { setProfilePicture } from '../../redux/resume/resume.actions';

import './profile-picture.styles.css';

const ProfilePicture = ({ className, setProfilePicture, profilePicture }) => {
  const [p, setP] = useState(null);

  useEffect(() => {
    storage
      .child('profile-pictures/sketch-short.jpeg')
      .getDownloadURL()
      .then(function (url) {
        setP(url);
        console.log('Hello', url);
      })
      .catch(function (error) {
        // Handle any errors
        console.log(error.message);
      });
  }, []);

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

        setProfilePicture(imageUrl);
      } else {
        alert('The selected file should an image and should not exceed 5MB');
      }
    };
  };

  return (
    <div className={`profilepicture ${className}`}>
      <Avatar src={profilePicture} />

      <div className="profilepicture__overlay" onClick={handleClick}>
        <CameraAltIcon />
        <span>Choose an image</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profilePicture: selectProfilePicture(state),
});

const mapDispatchToProps = (dispatch) => ({
  setProfilePicture: (pic) => dispatch(setProfilePicture(pic)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePicture);

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
