import React from 'react';
import { connect } from 'react-redux';

import { uploadProfilePicture } from '../../firebase/firebase';

import { Avatar } from '@material-ui/core';
import CameraAltIcon from '@material-ui/icons/CameraAlt';

import { selectProfilePicture } from '../../redux/resume/resume.selectors';
import { setProfilePicture } from '../../redux/resume/resume.actions';

import './profile-picture.styles.css';

const ProfilePicture = ({ className, setProfilePicture, profilePicture }) => {
  const handleClick = () => {
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.multiple = false;
    imageInput.accept = 'image/*';

    imageInput.click();

    imageInput.onchange = async () => {
      const uploadedImage = imageInput.files[0];

      if (
        uploadedImage.type.includes('image/') &&
        uploadedImage.size <= 5242880
      ) {
        // Uploading the image to firebase and getting the URL
        setProfilePicture(
          'https://media2.giphy.com/media/xTkcEQACH24SMPxIQg/giphy.gif?cid=ecf05e47uybihft8mqznnchgm1bweda6z7na9yih8u897wjq&rid=giphy.gif'
        );

        try {
          const newProfilePictureUrl = await uploadProfilePicture(
            uploadedImage,
            uploadedImage.type
          );

          setProfilePicture(newProfilePictureUrl);
        } catch (err) {
          setProfilePicture(null);
          alert(
            'Something went wrong while uploading profile picture! Try Again'
          );
        }
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
