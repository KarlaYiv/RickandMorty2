import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import ProfileImage from './character/ProfileImage';
import Properties from './character/Properties';
import useAuth from '../hooks/UseAuth';
import FavHeart from './character/FavHeart';


export default function CharacterDetail(props) {
  const { character } = props;
  const {auth} = useAuth()
  console.log(character);
  console.log(character.character.id)
  return (
    <SafeAreaView style={styles.saview}>
      <ScrollView
        centerContent
        showsVerticalScrollIndicator={false}
        >
        <View>
          {/* Profile Image */}
          <ProfileImage character={character.character} />
          {/* Character Name */}
          <View style={styles.containerName}>
          <Text numberOfLines={2} style={styles.name}>
            {character.character.name}
          </Text>
          {auth&&<FavHeart characterId={character.character.id} style={styles.corazon}/>}
          </View>
          {/* Basic Properties */}
          <View style={styles.infoContainer}>
            <Properties gen={character.character.gender} spe={character.character.species} 
            ori={character.character.origin.name} loc={character.character.location.name} 
            stat={character.character.status} typ={character.character.type}/>
          </View>
          <View style={{height: 200}}>
            <Text style={styles.footerText}>Es todo lo que se sabe!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const fondoSVG = '<svg id="visual" viewBox="0 0 450 900" width="450" height="900" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><rect x="0" y="0" width="450" height="900" fill="#140021"></rect><path d="M0 515L20 515L20 450L41 450L41 570L61 570L61 526L82 526L82 397L102 397L102 408L123 408L123 512L143 512L143 564L164 564L164 499L184 499L184 540L205 540L205 404L225 404L225 480L245 480L245 584L266 584L266 510L286 510L286 586L307 586L307 533L327 533L327 392L348 392L348 476L368 476L368 599L389 599L389 600L409 600L409 485L430 485L430 565L450 565L450 392L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#4ea8de"></path><path d="M0 520L20 520L20 451L41 451L41 536L61 536L61 451L82 451L82 542L102 542L102 487L123 487L123 449L143 449L143 455L164 455L164 455L184 455L184 524L205 524L205 578L225 578L225 579L245 579L245 586L266 586L266 545L286 545L286 500L307 500L307 587L327 587L327 537L348 537L348 582L368 582L368 450L389 450L389 494L409 494L409 503L430 503L430 491L450 491L450 462L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#29cfeb"></path><path d="M0 577L20 577L20 597L41 597L41 607L61 607L61 626L82 626L82 686L102 686L102 589L123 589L123 573L143 573L143 545L164 545L164 611L184 611L184 652L205 652L205 555L225 555L225 593L245 593L245 669L266 669L266 582L286 582L286 645L307 645L307 577L327 577L327 552L348 552L348 669L368 669L368 566L389 566L389 631L409 631L409 681L430 681L430 569L450 569L450 644L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#5ff2e2"></path><path d="M0 683L20 683L20 722L41 722L41 687L61 687L61 673L82 673L82 634L102 634L102 627L123 627L123 704L143 704L143 651L164 651L164 650L184 650L184 668L205 668L205 692L225 692L225 713L245 713L245 690L266 690L266 681L286 681L286 629L307 629L307 667L327 667L327 614L348 614L348 598L368 598L368 706L389 706L389 654L409 654L409 583L430 583L430 652L450 652L450 711L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#80ffdb"></path><path d="M0 729L20 729L20 766L41 766L41 693L61 693L61 723L82 723L82 718L102 718L102 698L123 698L123 687L143 687L143 742L164 742L164 656L184 656L184 748L205 748L205 685L225 685L225 771L245 771L245 647L266 647L266 721L286 721L286 760L307 760L307 761L327 761L327 755L348 755L348 701L368 701L368 700L389 700L389 673L409 673L409 675L430 675L430 648L450 648L450 652L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#5ff2e2"></path><path d="M0 814L20 814L20 754L41 754L41 728L61 728L61 813L82 813L82 764L102 764L102 815L123 815L123 770L143 770L143 746L164 746L164 793L184 793L184 797L205 797L205 779L225 779L225 807L245 807L245 726L266 726L266 792L286 792L286 760L307 760L307 728L327 728L327 800L348 800L348 792L368 792L368 776L389 776L389 728L409 728L409 775L430 775L430 802L450 802L450 790L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#29cfeb"></path><path d="M0 842L20 842L20 851L41 851L41 850L61 850L61 813L82 813L82 834L102 834L102 823L123 823L123 792L143 792L143 825L164 825L164 856L184 856L184 824L205 824L205 837L225 837L225 839L245 839L245 822L266 822L266 812L286 812L286 853L307 853L307 830L327 830L327 853L348 853L348 804L368 804L368 788L389 788L389 809L409 809L409 828L430 828L430 786L450 786L450 785L450 901L450 901L430 901L430 901L409 901L409 901L389 901L389 901L368 901L368 901L348 901L348 901L327 901L327 901L307 901L307 901L286 901L286 901L266 901L266 901L245 901L245 901L225 901L225 901L205 901L205 901L184 901L184 901L164 901L164 901L143 901L143 901L123 901L123 901L102 901L102 901L82 901L82 901L61 901L61 901L41 901L41 901L20 901L20 901L0 901Z" fill="#4ea8de"></path></svg>';
const styles = StyleSheet.create({
  container: {marginHorizontal: 10},
  footerText: {
    color: `#47607255`,
    fontSize: 14,
    marginTop: 25,
    textAlign: 'center',
  },
  containerName:{
    width: 350,
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: '#16FF00',
    fontSize: 28,
    width: '100%',
    paddingTop: 12,
    paddingBottom: 12,
    //paddingLeft:20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  corazon:{
    //width: 10,
    //paddingLeft:-10
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25
  },
  containerSvg:{
    position: 'absolute',
     top: 0,
     left: 0,
     right: 16,
     bottom: 0,
},
saview: {
  backgroundColor: '#000000',
}
  })