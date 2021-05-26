import React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity } from "react-native"
import { CartIcon, VectorIcon } from "../../assets/svg";

 export const ShopCard = ({ icon, label, piece, price, onPress  }) => {
    return (
      <View style={styles.base}>
          <TouchableOpacity onPress={onPress}> 
          <Image resizeMode="cover" style={styles.image} source={icon}  />
          </TouchableOpacity>
          <View>
          <Text style={styles.label}>{label}</Text>
          <View style={styles.pricebox}>
          <Text style={styles.price}>{price}</Text> 
          <Text style={styles.piece}>{piece}</Text>
          </View>
          <View style={styles.iconbox}>
          <TouchableOpacity style={styles.Vectoricon} ><VectorIcon/></TouchableOpacity>
          <TouchableOpacity style={styles.carticon}><CartIcon/></TouchableOpacity>
          </View>
          </View>
      </View> 
    
    );
  };
  const styles = StyleSheet.create({
    pricebox:{
        flexDirection:"row"
    },  
    iconbox:{
      flexDirection:"row"
    },
    carticon:{
      backgroundColor:"#0BCE83",
      height:40,
      width:70,
      alignItems:"center",
      justifyContent:"center",
      marginTop:48,
      borderRadius:8,
      marginLeft:10
    },
    Vectoricon:{
      backgroundColor:"#FFFFFF",
      marginLeft:15, 
      height:40,
      width:70, 
      alignItems:"center",
      justifyContent:"center",
      marginTop:48,
      borderRadius:8,
      borderWidth:1,
      borderColor:"#D9D0E3"
    },

    base: {
      width: 189,
      height:180,
      borderRadius: 8,
      flexDirection:"row",
      justifyContent:"space-between"
    
      },
    image: {
        width: 160,
        height: 150,
        borderRadius:8
      },
      label:{
        color:"#2D0C57",
        fontSize:20,
        lineHeight:20,
        marginLeft:15,
        fontWeight:"bold",
        marginTop:2
      },
      piece:{
        marginLeft:10,
        marginTop:20,
        fontSize:14,
        lineHeight:20,
        color:"#9586A8"
      },
      price:{
        marginTop:25,
        color:"#2D0C57",
        fontSize:22,
        lineHeight:20,
        marginLeft:15,
        fontWeight:"600"
      },

  });
  