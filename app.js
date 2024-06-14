document.addEventListener('DOMContentLoaded', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        document.getElementById('welcomeMessage').textContent = `Seja bem-vindo, ${loggedInUser}!`;
    }

    document.getElementById('confirmPresence').addEventListener('click', function() {
        const subject = document.getElementById('subject').value;
        if (!subject) {
            alert('Por favor, selecione uma matéria.');
            return;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            alert("Geolocalização não é suportada por este navegador.");
        }
    });

    function showPosition(position) {
        // Aqui você pode enviar a localização para o servidor ou simplesmente confirmar a presença
        console.log("Latitude: " + position.coords.latitude + 
        "\nLongitude: " + position.coords.longitude);
        window.location.href = 'confirmacao.html';
    }

    function showError(error) {
        switch(error.code) {
            case error.PERMISSION_DENIED:
                alert("Usuário negou a solicitação de geolocalização.");
                break;
            case error.POSITION_UNAVAILABLE:
                alert("Informações de localização não estão disponíveis.");
                break;
            case error.TIMEOUT:
                alert("A solicitação para obter a localização do usuário expirou.");
                break;
            case error.UNKNOWN_ERROR:
                alert("Um erro desconhecido ocorreu.");
                break;
        }
    }
});
