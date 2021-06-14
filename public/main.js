const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');

update.addEventListener('click', (_) => {
  fetch('/quotes', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Dark Vador',
      quote: 'Votre manque de foi me consterne.',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      window.location.reload();
    });
});

const messageDiv = document.querySelector('#message');

deleteButton.addEventListener('click', (_) => {
  fetch('/quotes', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Dark Vador',
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
    })
    .then((response) => {
      if (response === 'Aucune citation à supprimer') {
        messageDiv.textContent = 'Aucune citation de Dark Vador à supprimer';
      } else {
        window.location.reload();
      }
    })
    .catch(console.error);
});
