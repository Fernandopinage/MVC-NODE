
        function Zona() {

            var zona = document.getElementById('zona').value
            console.log(zona)

            if (zona == '') {
                document.getElementById('norte').style.display = 'none';
                document.getElementById('leste').style.display = 'none';
                document.getElementById('sul').style.display = 'none';
                document.getElementById('oeste').style.display = 'none';
                document.getElementById('centrosul').style.display = 'none';
                document.getElementById('centroeste').style.display = 'none';
            }

            if (zona == 'zn') {

                document.getElementById('norte').style.display = 'block';
                document.getElementById('leste').style.display = 'none';
                document.getElementById('sul').style.display = 'none';
                document.getElementById('oeste').style.display = 'none';
                document.getElementById('centrosul').style.display = 'none';
                document.getElementById('centroeste').style.display = 'none';
            }

            if (zona == 'zl') {

                document.getElementById('leste').style.display = 'block';
                document.getElementById('norte').style.display = 'none';
                document.getElementById('sul').style.display = 'none';
                document.getElementById('oeste').style.display = 'none';
                document.getElementById('centrosul').style.display = 'none';
                document.getElementById('centroeste').style.display = 'none';
            }


            if (zona == 'zs') {

                document.getElementById('sul').style.display = 'block';
                document.getElementById('oeste').style.display = 'none';
                document.getElementById('norte').style.display = 'none';
                document.getElementById('leste').style.display = 'none';
                document.getElementById('centrosul').style.display = 'none';
                document.getElementById('centroeste').style.display = 'none';
            }


            if (zona == 'zo') {

                document.getElementById('oeste').style.display = 'block';
                document.getElementById('sul').style.display = 'none';
                document.getElementById('leste').style.display = 'none';
                document.getElementById('norte').style.display = 'none';
                document.getElementById('centrosul').style.display = 'none';
                document.getElementById('centroeste').style.display = 'none';
            }
            if (zona == 'zcs') {

                document.getElementById('centrosul').style.display = 'block';
                document.getElementById('sul').style.display = 'none';
                document.getElementById('leste').style.display = 'none';
                document.getElementById('norte').style.display = 'none';
                document.getElementById('oeste').style.display = 'none';
                document.getElementById('centroeste').style.display = 'none';
            }


            if (zona == 'zco') {

                document.getElementById('centroeste').style.display = 'block';
                document.getElementById('sul').style.display = 'none';
                document.getElementById('leste').style.display = 'none';
                document.getElementById('norte').style.display = 'none';
                document.getElementById('oeste').style.display = 'none';
                document.getElementById('centrosul').style.display = 'none';
            }
        }
