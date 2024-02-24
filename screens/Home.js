import { FlatList, StyleSheet, Text, View } from "react-native"
import {useQuery, gql} from '@apollo/client';
import { useEffect } from "react";
import MovieCard from "../components/MovieCard";

const QUERY = gql`
query Query {
    allFilms {
      films {
        title
        director
        releaseDate
        speciesConnection {
          species {
            name
            classification
            homeworld {
              name
            }
          }
        }
      }
    }
  }`;

export default function Home(){
    const {data, loading} =  useQuery(QUERY);
    useEffect(()=>{
        //console.log(data.allFilms.films)
    })
    return(
        <View style={styles.conatianer}>
          {console.log(loading)}
            {console.log(data)}
        { loading && <Text style={{textAlign:"center", fontSize:16}}>Loading Data...</Text> }
        {!loading && <FlatList 
            data={data.allFilms.films}
            
            keyExtractor={item => item.index}
            renderItem={(itemData,index) => {
               return <MovieCard Data={itemData}/>
              
            }
            
        }
        />}
        </View>
    );
}

const styles = StyleSheet.create({
    conatianer:{
        flex:1,
        backgroundColor: "white",
        paddingVertical:10,
        justifyContent:"center",
        alignContent:"center"
    },
 
})