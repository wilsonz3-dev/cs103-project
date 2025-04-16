function toggleSection(section) {
    if (section) {
        section.hidden = !section.hidden;
    }
}

function colorAllHeadings() {
    const headings = document.getElementsByTagName("h2");

    const random_color_list = ["darkorange", "darkblue", "darkgreen", "crimson", "mediumvioletred"];

    for (let i = 0; i < headings.length; i++) {
        const randomIndex = Math.floor(Math.random() * random_color_list.length); // Generate a random integer (0-length of list)
        headings[i].style.color = random_color_list[randomIndex]; // Set randomized color to the h2 tags
    }
}