function generateResume() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone_no').value;
    const linkedin = document.getElementById('lprofile').value;
    const github = document.getElementById('gprofile').value;
    const experience = document.getElementById('wExp').value;
    const education = document.getElementById('ed').value;
    const photoInput = document.getElementById('pic');
    
    document.getElementById('displayName').innerText = name;
    document.getElementById('displayEmail').innerText = email;
    document.getElementById('displayPhone').innerText = phone;
    document.getElementById('displayLinkedin').innerText = linkedin;
    document.getElementById('displayGithub').innerText = github;
    document.getElementById('displayExperience').innerText = experience;
    document.getElementById('displayEducation').innerText = education;

    const previewPhoto = document.getElementById('displayPic');
    if (photoInput.files && photoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewPhoto.src = e.target.result;
        };
        reader.readAsDataURL(photoInput.files[0]);
    } else {
        previewPhoto.style.display = 'none';
    }
    
    document.getElementById('user_form').style.display = 'none';
    document.getElementById('resume').style.display = 'block';
}
function downloadResume() {
    const resumeElement = document.getElementById('resume');
    
   
    const options = {           
        filename: 'Resume.pdf',   
    };
    
   
    html2pdf().from(resumeElement).set(options).save();
}