export const uploadProfileImage = (e) => {
  if (e.target.files[0] !== null) {
    this.setState({
      processStatus: true,
      processStatusAlert: "alert alert-warning",
      processStatusMessage: "Image Uploading...",
    });
    const uploadTask = storage
      .ref(`presenter/${e.target.files[0].name}`)
      .put(e.target.files[0]);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        //progress function
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ uploadPercentage: progress });
      },
      (error) => {
        //error function
        console.log(error);
      },
      () => {
        //complete function
        storage
          .ref("presenter")
          .child(e.target.files[0].name)
          .getDownloadURL()
          .then((url) => {
            return url;
          });
      }
    );
  } else {
    return url;
  }
};
