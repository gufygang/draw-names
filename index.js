const root = document.getElementById("root");
            const inputNama = document.getElementById("inputNama");
            let numStop =0;

            let hadiah = "";
            kirimNama.addEventListener("click", (e)=>{
                e.preventDefault();
                let namas = inputNama.value
                let arrName = namas.split("\n");
                let html = `
                <div class="container">
                <h3 style="text-align: center;">Acak Nama untuk Doorprize!!!</h3>
                <fieldset>
                        <legend>Hadiah</legend>
                    <input type="text" name="hdh" id="hdh" class="input" autofocus>
                    <button class="btn btn-accent" onclick="pilihHadiah(document.getElementById('hdh'))">Tetapkan Hadiah</button>
                    <b><span id="hdhTetap"></span></b>
                </fieldset>
            </div>
                <div class="container sticky" style="background-color: white; height: 200px;">
                <button class="btn btn-default" id="acakNama">Acak Nama</button>
                <button class="btn btn-accent" id="stopAcak">Stop</button>
                <div class="box" style="height: 100px;">            
                  <h1 id="nama">XXXX XXXX</h1>
                  </div>
                  </div>
                  <div class="container">
                    <button class="btn btn-accent" id="keluarkanNama">Keluarkan Nama</button>
                    <table class="table">
                        <thead>
                            <tr>
                                <th colspan="3">PEMENANG</th>
                            </tr>
                        </thead>
                        <tbody id="tBody">
                            <tr id="tidakAdaData">
                                <td colspan="3">belum ada pemenang</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>`;
                root.innerHTML = html;
                tampilAcak(arrName);
            })

            function pilihHadiah(el) {
              hadiah = el.value;
              hdhTetap.innerText = el.value;
            }            
            
            function rndInt(min,max) {
              return Math.floor(Math.random() * (max - min + 1)+min)
            }          
            
            function pengacak(isi,nama) {                
              var namaAcak = setInterval(function() {
                  rnd = rndInt(0,isi.length-1);
                    if(isi.length !== 0){                     
                      nama.innerText = isi[rnd];
                    }
                },100);
                stopAcak.addEventListener("click", (event)=>{
                  clearInterval(namaAcak);
                  numStop = rnd;
                })
              }
              function tampilAcak(arrName) {
                const nama = document.getElementById("nama");
                const kirimNama = document.getElementById("kirimNama");
                const stopAcak = document.getElementById("stopAcak");
                const keluarkanNama = document.getElementById("keluarkanNama");
                const tBody = document.getElementById("tBody");
                const tidakAdaData = document.getElementById("tidakAdaData");
                const hdhTetap = document.getElementById("hdhTetap");
                const acakNama = document.getElementById("acakNama");
                acakNama.addEventListener("click", (event)=>{                    
                    pengacak(arrName,nama);
                })
                let rnd = 0;
                let i = 0;                
                keluarkanNama.addEventListener("click",(event)=>{
                    event.preventDefault();
                    if(hadiah !== ""){
                        tidakAdaData.style.display = "none";
                        i++;
                        if(arrName.length !== 0){
                            let tr = document.createElement("tr");
                            tr.innerHTML = "<td>"+i+"</td><td style='width: 70%'>"+nama.innerText+"</td><td>"+hadiah+"</td>"
                            tBody.appendChild(tr);     
                            arrName.splice(numStop,1); 
                            nama.innerText = "XXXX XXXX"
                        }else{
                            alert("Nama sudah habis!");
                        }
                    }else{
                    alert("Hadiah belum ditetapkan! atau Nama belum diacak");
                    }
                })
              }
            
