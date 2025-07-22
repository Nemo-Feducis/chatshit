// Welcome modal enforcement
const welcomeOverlay = document.getElementById('welcome-overlay');
const welcomeModal = document.getElementById('welcome-modal');
const userNameDisplay = document.getElementById('user-name');
const userPfp = document.getElementById('user-pfp');

if (!sessionStorage.getItem('welcomeModalShown')) {
    welcomeModal.classList.add('active');
    welcomeOverlay.classList.add('active');
    // Disable outside click to close
    welcomeModal.addEventListener('click', (event) => {
        event.stopPropagation();
    });
}

document.getElementById('welcome-submit').addEventListener('click', () => {
    const accountName = document.getElementById('account-name-input').value.trim();
    if (accountName) {
        userNameDisplay.textContent = accountName;
        userPfp.textContent = accountName[0];
        welcomeModal.classList.remove('active');
        welcomeOverlay.classList.remove('active');
        sessionStorage.setItem('welcomeModalShown', 'true');
    } else {
        alert('Please enter a valid account name.');
    }
});

// Sidebar toggle
document.getElementById('toggle-sidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('sidebar-open');
    sidebar.classList.add('sidebar-closed');
});

document.getElementById('reopen-sidebar').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('sidebar-closed');
    sidebar.classList.add('sidebar-open');
});

// Modal functionality
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const modalTitle = document.getElementById('modal-title');
const modalBody = document.getElementById('modal-body');
const modalCancel = document.getElementById('modal-cancel');
const avatarModal = document.getElementById('avatar-modal');
const avatarCancel = document.getElementById('avatar-cancel');
const helpModal = document.getElementById('help-modal');

// Help modal
document.getElementById('help-btn').addEventListener('click', () => {
    helpModal.classList.add('active');
});

document.getElementById('help-close').addEventListener('click', () => {
    helpModal.classList.remove('active');
});

helpModal.addEventListener('click', (event) => {
    if (event.target === helpModal) {
        helpModal.classList.remove('active');
    }
});

// Room modal
document.getElementById('join-room').addEventListener('click', () => {
    modalTitle.textContent = 'Join Room';
    modalBody.innerHTML = `
        <input id="room-name-input" type="text" placeholder="Room name" class="modal-input">
        <input id="room-code-input" type="text" placeholder="Room code" class="modal-input">
    `;
    modalContent.querySelector('.modal-buttons').innerHTML = `
        <button id="modal-cancel" class="modal-btn cancel">Cancel</button>
        <button id="modal-submit" class="modal-btn submit">Submit</button>
    `;
    modal.classList.add('active');
    document.getElementById('modal-submit').addEventListener('click', () => {
        const roomName = document.getElementById('room-name-input').value.trim();
        const roomCode = document.getElementById('room-code-input').value.trim();
        if (roomName && roomCode) {
            console.log('Join Room:', { roomName, roomCode });
            modal.classList.remove('active');
        } else {
            alert('Please enter both room name and room code.');
        }
    });
    document.getElementById('modal-cancel').addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

document.getElementById('create-room').addEventListener('click', () => {
    modalTitle.textContent = 'Create Room';
    modalBody.innerHTML = `
        <input id="room-name-input" type="text" placeholder="Room name" class="modal-input">
        <input id="room-code-input" type="text" placeholder="Room code" class="modal-input">
    `;
    modalContent.querySelector('.modal-buttons').innerHTML = `
        <button id="modal-cancel" class="modal-btn cancel">Cancel</button>
        <button id="modal-submit" class="modal-btn submit">Submit</button>
    `;
    modal.classList.add('active');
    document.getElementById('modal-submit').addEventListener('click', () => {
        const roomName = document.getElementById('room-name-input').value.trim();
        const roomCode = document.getElementById('room-code-input').value.trim();
        if (roomName && roomCode) {
            console.log('Create Room:', { roomName, roomCode });
            modal.classList.remove('active');
        } else {
            alert('Please enter both room name and room code.');
        }
    });
    document.getElementById('modal-cancel').addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

// Settings modal
document.getElementById('settings-btn').addEventListener('click', () => {
    modalTitle.textContent = 'User Settings';
    modalBody.innerHTML = `
        <div class="user-info-display">
            <div class="pfp-container">
                <div id="pfp-slot" class="user-pfp" style="background-color: ${userPfp.style.backgroundColor}">${userNameDisplay.textContent[0]}</div>
                <button id="change-pfp" class="modal-btn change-pfp">Change</button>
            </div>
            <div class="name-container">
                <span>Current Username: ${userNameDisplay.textContent}</span>
                <input id="new-name-input" type="text" placeholder="New username" class="modal-input">
                <button id="change-name-submit" class="modal-btn submit">Change Name</button>
            </div>
        </div>
    `;
    modalContent.querySelector('.modal-buttons').innerHTML = `
        <button id="modal-cancel" class="modal-btn cancel">Cancel</button>
    `;
    modal.classList.add('active');
    document.getElementById('change-name-submit').addEventListener('click', () => {
        const newName = document.getElementById('new-name-input').value.trim();
        if (newName) {
            userNameDisplay.textContent = newName;
            userPfp.textContent = newName[0];
            modal.classList.remove('active');
        } else {
            alert('Please enter a valid username.');
        }
    });
    document.getElementById('change-pfp').addEventListener('click', () => {
        modal.classList.remove('active');
        avatarModal.classList.add('active');
    });
    document.getElementById('modal-cancel').addEventListener('click', () => {
        modal.classList.remove('active');
    });
});

// Avatar modal
document.querySelectorAll('.avatar-option').forEach(option => {
    option.addEventListener('click', () => {
        const color = option.getAttribute('data-color');
        userPfp.style.backgroundColor = color;
        avatarModal.classList.remove('active');
    });
});

document.getElementById('avatar-upload').addEventListener('click', (event) => {
    const file = event.target.files[0];
    if (file) {
        console.log('Uploaded PFP:', { name: file.name, size: file.size, type: file.type });
        avatarModal.classList.remove('active');
    }
});

modalCancel.addEventListener('click', () => {
    modal.classList.remove('active');
});

avatarCancel.addEventListener('click', () => {
    avatarModal.classList.remove('active');
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

avatarModal.addEventListener('click', (event) => {
    if (event.target === avatarModal) {
        avatarModal.classList.remove('active');
    }
});
