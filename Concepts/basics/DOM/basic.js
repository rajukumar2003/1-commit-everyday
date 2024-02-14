<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <script>
        // debouncing , throtlling
        let timeout;
        function debouncepopulateDiv(){
            clearTimeout(timeout);
            timeout = setTimeout(function() {
                populateDiv()
            }, 1000);
        }

        async function populateDiv(){
            const a = document.getElementById('fnum').value;
            const b = document.getElementById('snum').value;
            const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b="+ b);
            const ans = await response.text();

            document.getElementById("finalsum").innerHTML = ans

        }
    </script>
</head>
<body>

    <input oninput="debouncepopulateDiv()" id="fnum" type="text" placeholder="First number">
    <br>
    <input oninput="debouncepopulateDiv()" id="snum" type="text" placeholder="Second number">
    <br>
    <!-- <button onclick="debouncepopulateDiv()">Calculate sum</button> -->
    <div id="finalsum"></div>

</body>
</html>
