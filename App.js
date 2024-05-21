import { Button, Grid, Input, Textarea, Container, Stack } from '@mantine/core';
import '@mantine/core/styles.css';
import './App.css';
import CardComponent from "./components/Card";
import { useState } from "react"

let arr = [{ id: 1, tittle: "Dağ 1", par: "Açıklama 1" },
{ id: 2, tittle: "Dağ 2", par: "Açıklama 2" },
{ id: 3, tittle: "Dağ 3", par: "Açıklama 3" },
{ id: 4, tittle: "Dağ 4", par: "Açıklama 4" }]

function App() {

  const [tittle, setTittle] = useState("")
  const [Paragraf, setParagraf] = useState("")
  const [List, setList] = useState(arr);
  const click = () => {
    setTittle("");
    setParagraf("");

    // const copyList YAPMADAN DIREK SETLISTIN ICINE DE KOYABILIRSIN
    // copyList.push({
    //   id: 5, tittle, par: Paragraf
    // });pus olmadan da yukardaki gibi
    //push dan farkı ..list den 
    //once koyarsan nesneyi card eklemesi başa olur
    setList([{ id: 5, tittle, par: Paragraf }, ...List
    ]);
  }
  return (
    <Container className="firstpage">
      <h2>Simple Card APP</h2>
      <Stack>

        <Input.Wrapper label="Başlık"  >
          <Input placeholder="Başlık yaz" value={tittle}
            onChange={(e) => setTittle(e.target.value)} />
        </Input.Wrapper>
        <Textarea
          label="Paragraf"
          placeholder="Paragraf yaz"
          value={Paragraf}
          onChange={(e) => setParagraf(e.target.value)}
        />
      </Stack>
      <Button className="kartB" variant="outline" onClick={click}>Kart ekle</Button>

      <Grid >
        {List.map( ({ par, tittle }, i) => {
          return (
            <Grid.Col span={3} key={`index ${i}`}>
              <CardComponent   par={par} tittle={tittle}  i={i}
                click={() => {
                  let copyList = [...List];
                  copyList.splice(i, 1);
                  setList(copyList);


                }}
              />
            </Grid.Col>
          )
        })}
      </Grid>

    </Container>
  );
}
export default App;
//set fonksiyonu veri değişikliği yapmayı sağlar.
//  <button onClick={() => setDers(ders - 1)}>Azalt</button>
//       <button onClick={() => setDers(ders + 1)}>Arttır</button>


