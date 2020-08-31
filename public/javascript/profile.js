window.addEventListener('DOMContentLoaded', () => {
    const inputAvatar = document.querySelector('#inputAvatar');
    const formContainer = document.querySelector('#formContainer');
    
    formContainer.addEventListener('click', () => {
        inputAvatar.click();
    })

    inputAvatar.addEventListener('change', () => {
        formContainer.submit();     
    });
})
