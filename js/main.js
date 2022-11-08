const toastLiveExample = document.getElementById('liveToast')
window.addEventListener('load', () => {
    const toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
});
