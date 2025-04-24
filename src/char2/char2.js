function crystal() {
    let value = Number(depth.value); // use let instead of const
    let img = document.getElementById("crystal-img");

    img.style.visibility = "hidden";
    output.innerHTML = "";

    if (value <= 0) {
        output.innerHTML = "She cannot dive above ground!";
    } else if (value <= 50) {
        img.src = "pics/squid_crystal.jpg";
        img.alt = "Squid Crystal";
        img.style.visibility = "visible";
        output.innerHTML = "Mae found you a Squid Crystal! Named after its long tentacle-like shape B)";
    } else if (value <= 100) {
        img.src = "pics/bubble_crystal.jpg";
        img.alt = "Bubble Crystal";
        img.style.visibility = "visible";
        output.innerHTML = "Mae found you a Bubble Crystal! No question where it gets its name from B)";
    } else if (value <= 150) {
        img.src = "pics/chunk_crystal.jpg";
        img.alt = "Chalk Crystal";
        img.style.visibility = "visible";
        output.innerHTML = "Mae found you a Chalk Crystal! Named after its white color and resemblance to chalk B)";
    } else if (value <= 200) {
        img.src = "pics/mirror_crystal.jpg";
        img.alt = "Mirror Crystal";
        img.style.visibility = "visible";
        output.innerHTML = "Mae found you a Mirror Crystal! Named after its reflective qualities B)";
    } else if (value > 200) {
        output.innerHTML = "Mae prefers not to dive so deep :)";
    } else {
        output.innerHTML = "Try something else :)";
    }
}
