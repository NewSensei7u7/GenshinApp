import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, ScrollView, Button, Linking} from 'react-native';

const Separador = () => (
  <View style ={styles.separador}></View>
)

const Linea = () => (
  <View style = {styles.LineaEstilo}></View>
)

export default function App() {
  return (
    <ImageBackground source = {{uri: "https://i.pinimg.com/originals/c0/ee/d8/c0eed8526a0acc1f979219eef01d87fe.gif"}} style = {styles.imgBackground}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
            <Separador/>
            <Separador/>
            <Separador/>
            <Separador/>
            <Separador/>
          <Text style={styles.FontTitulo}>Genshin App</Text>
            <Separador/>
            <Separador/>
          <Text style={styles.FontP}>Wallpapers</Text>
            <Separador/>
          <Text style={styles.FontP}>Personajes</Text>
            <Separador/>
          <Text style={styles.FontP}>Mona</Text>
            <Separador/>
          <Image style ={styles.FotoW}
          source = {{uri: "https://i.pinimg.com/originals/21/8e/46/218e46f47c22f4d984a5f7c8ad94cf94.jpg"}}
          />
          <View style = {styles.contenedorBoton}>
          <Button style = {{with: 10,}}
          onPress = {() => Linking.openURL('https://i.pinimg.com/originals/21/8e/46/218e46f47c22f4d984a5f7c8ad94cf94.jpg')}
          title = 'Abrir'
          color = 'rgba(0,0,0,0)'
          />
          </View>
           <Separador/>
           <Image style ={styles.FotoW}
          source = {{uri: "https://preview.redd.it/t8y0mricony51.png?width=922&format=png&auto=webp&s=2b728d98f30ca0092ed620069755472925993f6d"}}
          />
          <View style = {styles.contenedorBoton}>
          <Button
          onPress = {() => Linking.openURL('https://preview.redd.it/t8y0mricony51.png?width=922&format=png&auto=webp&s=2b728d98f30ca0092ed620069755472925993f6d')}
          title = 'Abrir'
          color = 'rgba(0,0,0,0)'
          />
          </View>
           <Separador/>
          <Text style={styles.FontP}>Ganyu</Text>
            <Separador/>
          <Image style ={styles.FotoW}
          source = {{uri: "https://wall.zencafe.net/wp-content/uploads/2020/12/Ganyu-Genshin-Impact-Wallpaper-HD-3156194.png"}}
          />
          <View style = {styles.contenedorBoton}>
          <Button
          onPress = {() => Linking.openURL('https://wall.zencafe.net/wp-content/uploads/2020/12/Ganyu-Genshin-Impact-Wallpaper-HD-3156194.png')}
          title = 'Abrir'
          color = 'rgba(0,0,0,0)'
          />
          </View>
          <Separador/>
          <Image style ={styles.FotoW}
          source = {{uri: "https://wallpapercave.com/wp/wp8397007.png"}}
          />
          <View style = {styles.contenedorBoton}>
          <Button
          onPress = {() => Linking.openURL('https://wallpapercave.com/wp/wp8397007.png')}
          title = 'Abrir'
          color = 'rgba(0,0,0,0)'
          />
          </View>
           <Separador/>
          <Text style={styles.FontP}>Keqing</Text>
            <Separador/>
          <Image style ={styles.FotoW}
          source = {{uri: "https://mfiles.alphacoders.com/885/thumb-1920-885425.jpg"}}
          />
          <View style = {styles.contenedorBoton}>
          <Button
          onPress = {() => Linking.openURL('https://mfiles.alphacoders.com/885/thumb-1920-885425.jpg')}
          title = 'Abrir'
          color = 'rgba(0,0,0,0)'
          />
          </View>
          <Separador/>
          <Image style ={styles.FotoW}
          source = {{uri: "https://wallpapercave.com/wp/wp7811629.png"}}
          />
          <View style = {styles.contenedorBoton}>
          <Button
          onPress = {() => Linking.openURL('https://wallpapercave.com/wp/wp7811629.png')}
          title = 'Abrir'
          color = 'rgba(0,0,0,0)'
          />
          </View>
            <Separador/>
            <Linea/>
            <Separador/>
            <Text style={styles.FontP}>Más Información</Text>
            <Separador/>
          <View style = {styles.ContenedorBotones}>
            <View style = {styles.boton_final}>
          <Button 
          title = 'Mona'
          color = 'rgb(81, 66, 245)'
          onPress = {() => Linking.openURL('https://genshin-impact.fandom.com/es/wiki/Mona')}
          />
            </View>
            <View style = {styles.boton_final}>
          <Button
          title = 'Ganyu'
          color = 'rgb(66, 215, 245)'
          onPress = {() => Linking.openURL('https://genshin-impact.fandom.com/es/wiki/Ganyu')}
          />
            </View>
            <View style = {styles.boton_final}>
          <Button
          title = 'Keqing'
          color = 'rgb(173, 66, 245)'
          onPress = {() => Linking.openURL('https://genshin-impact.fandom.com/wiki/Keqing')}
          />
          </View>
          </View>
          <Separador/>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.1)',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  separador: {
    marginVertical: 15,
  },
  FontTitulo: {
    fontSize : 45,
    textAlign: 'center',
    color: 'rgb(255,255,255)',
    textShadowColor: 'rgb(0,0,0)',
    textShadowRadius: 20,
  },
  FontP: {
    textAlign: 'center',
    fontSize: 25,
    color: 'rgb(255,255,255)',
    textShadowColor: 'rgb(0,0,0)',
    textShadowRadius: 20,
  },
  imgBackground: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  FotoW: {
    width: 250,
    height: 450,
    borderRadius: 10,
    alignSelf:'center',
  },
  LineaEstilo: {
    width: "100%",
    height: 5,
    backgroundColor: 'rgb(0,0,0)',
    borderRadius: 5
  },
  contenedorBoton:{
    width: '50%',
    alignSelf: 'center',
  },
  ContenedorBotones: {
    width: '100%',
    flexDirection: 'row',
  },
  boton_final: {
    width: '33%',
    alignSelf: 'center',
  }
});
