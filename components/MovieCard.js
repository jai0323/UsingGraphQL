import { StyleSheet, Text, View } from "react-native";

export default function MovieCard({Data}){
    const species = Data.item.speciesConnection.species;
    return(
        <View style={styles.item}>
            <Text style={[styles.country, {fontSize:20, textAlign:"center", paddingBottom:10,}]}>{Data.item.title}</Text>
            <View style={styles.innerConatiner}>
            <Text style={styles.country}>Release Date :-  {Data.item.releaseDate}</Text>
            <Text style={styles.country}>Director :-  {Data.item.director}</Text>
            <Text style={styles.country}>Species :-
            {species.map((item)=>{
                return <Text style={styles.country}> {species.indexOf(item)<species.length-1 ? item.name+"," : item.name+"."} </Text>
            })}
            </Text>
            <Text style={styles.country}>Classification :-
            {species.map((item)=>{
                return <Text style={styles.country}> {species.indexOf(item)<species.length-1 ? item.classification+"," : item.classification+"."}</Text>
            })}
            </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

   
    item:{
        padding:12,
        marginHorizontal:20,
        backgroundColor: "#33CDC2",
        borderRadius: 8,
        margin:3,
        elevation: 10
    },
    country:{
        fontSize:14,
        fontWeight: "600",
        textAlign: "left",
        color:"#28190E"
    },
    innerConatiner:{
        backgroundColor:"white",
        padding:4,
        borderRadius:4
    }
})