// Client ID: 946337887613-4vla7aci2leeiq00bi2c2d824b7e45ad.apps.googleusercontent.com
// Client Secret: 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

// Client Library:
<script src="https://accounts.google.com/gsi/client" async defer></script>

function handleCredentialResponse(response) {
    console.log("Encoded JWT ID token: " + response.credential);
  }
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "946337887613-4vla7aci2leeiq00bi2c2d824b7e45ad.apps.googleusercontent.com",
      callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
  }