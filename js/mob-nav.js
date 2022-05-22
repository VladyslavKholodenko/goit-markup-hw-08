(() => {
    const refs = {
    openModalBtn: document.querySelector("[data-mob-nav-open]"),
    closeModalBtn: document.querySelector("[data-mob-nav-close]"),
    modal: document.querySelector("[data-mob-nav]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    }
})();