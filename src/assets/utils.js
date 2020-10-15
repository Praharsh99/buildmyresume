import jsPDF from 'jspdf';

export const getTheVariableFontValue = (size) => {
  switch (size) {
    case 'small':
      return -2;

    case 'medium':
      return 0;

    case 'large':
      return 2;

    default:
      return 0;
  }
};

export const downloadPDF = (dataUrl) => {
  var doc = new jsPDF();
  var img = new Image();

  const username = document
    .getElementById('username__field')
    .textContent.trim()
    .toLowerCase();

  img.src = dataUrl;

  doc.addImage(img, 'PNG', 0, 0, 225, 330);
  doc.save(username ? `${username}'s resume.pdf` : 'buildmyresume.pdf');
};
