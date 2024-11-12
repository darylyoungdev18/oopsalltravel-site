export function toggleVideoInput() {
    const videoInputDiv = document.getElementById('videoInput');
    const isVideoBlogCheckbox = document.getElementById('Is_Video_Blog');
    if (isVideoBlogCheckbox.checked) {
      videoInputDiv.style.display = 'block';
    } else {
      videoInputDiv.style.display = 'none';
    }
  }