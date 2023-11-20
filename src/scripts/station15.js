function displayList() {
    const paragraphs = document.querySelectorAll('p');
    const ul = document.createElement('ul');

    paragraphs.forEach((paragraph) => {
        const li = document.createElement('li');
        li.textContent = paragraph.textContent;
        ul.appendChild(li);
    });

    const div = document.getElementById('fruits');
    div.appendChild(ul);

    // Remove the paragraphs
    paragraphs.forEach((paragraph) => {
        paragraph.remove();
    });
}
