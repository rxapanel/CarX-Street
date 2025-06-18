function contact(accountName) {
  const telegramUsername = "https://t.me/reallyra"; // change to your username
  const message = encodeURIComponent(`Hi! I'm interested in buying: ${accountName}`);
  window.open(`https://t.me/${telegramUsername}?text=${message}`, "_blank");
}