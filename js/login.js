function login() {
    $('#loadingModal').modal('show');

    setTimeout(function () {
        $('#loadingModal').modal('hide');

        window.location.href = '/main.html';
    }, 1000);
}