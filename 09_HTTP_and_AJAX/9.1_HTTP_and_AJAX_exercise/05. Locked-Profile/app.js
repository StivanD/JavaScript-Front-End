function lockedProfile() {
    async function fetchProfiles() {
        try {
            const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching profiles:', error);
        }
    }

    function createProfileCard(profile, index) {
        const profileCard = document.createElement('div');
        profileCard.classList.add('profile');

        const icon = document.createElement('img');
        icon.src = "./iconProfile2.png";
        icon.classList.add('userIcon');
        profileCard.appendChild(icon);

        const lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
        profileCard.appendChild(lockLabel);

        const lockRadio = document.createElement('input');
        lockRadio.type = 'radio';
        lockRadio.name = `user${index}Locked`;
        lockRadio.value = 'lock';
        lockRadio.checked = true;
        profileCard.appendChild(lockRadio);

        const unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
        profileCard.appendChild(unlockLabel);

        const unlockRadio = document.createElement('input');
        unlockRadio.type = 'radio';
        unlockRadio.name = `user${index}Locked`;
        unlockRadio.value = 'unlock';
        profileCard.appendChild(unlockRadio);

        const hr = document.createElement('hr');
        profileCard.appendChild(hr);

        const usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
        profileCard.appendChild(usernameLabel);

        const usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = `user${index}Username`;
        usernameInput.value = profile.username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
        profileCard.appendChild(usernameInput);

        const hiddenFieldsContainer = document.createElement('div');
        hiddenFieldsContainer.id = `user${index}HiddenFields`;
        profileCard.appendChild(hiddenFieldsContainer);

        const emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
        hiddenFieldsContainer.appendChild(emailLabel);

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${index}Email`;
        emailInput.value = profile.email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
        hiddenFieldsContainer.appendChild(emailInput);

        const ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
        hiddenFieldsContainer.appendChild(ageLabel);

        const ageInput = document.createElement('input');
        ageInput.type = 'text';
        ageInput.name = `user${index}Age`;
        ageInput.value = profile.age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
        hiddenFieldsContainer.appendChild(ageInput);

        const showMoreButton = document.createElement('button');
        showMoreButton.textContent = 'Show more';
        profileCard.appendChild(showMoreButton);

        showMoreButton.addEventListener('click', () => {
            if (unlockRadio.checked) {
                hiddenFieldsContainer.style.display = 'block';
            }
        });

        unlockRadio.addEventListener('change', () => {
            hiddenFieldsContainer.style.display = 'none';
        });

        return profileCard;
    }

    async function renderProfiles() {
        const main = document.getElementById('main');
        const profilesData = await fetchProfiles();

        if (profilesData) {
            Object.keys(profilesData).forEach((key, index) => {
                const profile = profilesData[key];
                const profileCard = createProfileCard(profile, index + 1);
                main.appendChild(profileCard);
            });
        }
    }

}