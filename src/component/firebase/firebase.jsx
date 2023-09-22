
  import { initializeApp } from 'firebase/app';
  import {
    getAuth, // it provide confermation
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword, // its class creat from firebase authentication
  } from 'firebase/auth';
  import { getFirestore, doc, getDoc, setDoc,collection,writeBatch, getDocs, query } from 'firebase/firestore';
                                           //  |              |
  // need two pair collection and writebatch , witebatch mean it is sussecfully tarnsiction of data store in firestore
  
  const firebaseConfig = {
    apiKey: "AIzaSyCMDfjTVCJ4kzfojTpKGjW-Nu0BefxefMA",
    authDomain: "crown-clothe-3f759.firebaseapp.com",
    projectId: "crown-clothe-3f759",
    storageBucket: "crown-clothe-3f759.appspot.com",
    messagingSenderId: "484544572898",
    appId: "1:484544572898:web:d2d1a1ea022db5466e5dbb",
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  
  const provider = new GoogleAuthProvider();
  
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  
  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);




export  const database= getFirestore()

//////////////////////////////////////////////////////////////////////////////////////////////////////

// this method use the store json file in firestore

export const collectionanddocumentstor = async (collectionkey, adddoucumentobject)=>{ // pass tow perameter 1 have category 2 have hole data of json
  const collectionRef = collection(database,collectionkey) // i need in collection database and category for set
  const batch=writeBatch(database) // its sussecfully tanjiction database by writebatch

  adddoucumentobject.forEach(object => { // this method every object have pass by foreach
    const docref=doc(collectionRef, object.title.toLowerCase()) // doc store the collection and id for data store 
    batch.set(docref,object) // and set the data in docref by writebatch
  });
  await batch.commit(); // commit data
  console.log('done')
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////


// this mthod use for how to get json data from firestor



export const  getcategoryanddocument = async ()=>{
  const collectionRef = collection(database,'category')
  const q=query(collectionRef) // this query genrate the collectionref and give new object like

  const querysnapshot = await getDocs(q)
  const categorymap= querysnapshot.docs.reduce((acc, docsnapshot)=>{
    const {title, items}=docsnapshot.data()
    acc[title.toLowerCase()]=items
    return acc
  },{})
return categorymap;

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  export const usercreatdocument = async (userAuth, additional={})=>{
      const docref = doc(database,'users',userAuth.uid);
      console.log(docref);

      const get= await getDoc(docref)
      console.log(get)
      console.log(get.exists())

      if(!get.exists()){
        const {displayName,email} = userAuth
        try{
          await setDoc(docref,{displayName,email, ...additional})
        }catch(error){
          console.log("hhhhh"+error)
        }
      }
  }
 export const aaa= async(email,password,)=>{
  if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password)
 }
  
 