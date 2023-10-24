// ES7 sıralı asenkron kod bloklarını satır satır senkron gibi yönetmek için kullanılan bir teknik.

var userPromise = new Promise((resolve,reject) => {
  setTimeout(() => {
      resolve({id:1,name:"ali"})
  }, 4000);
})

var profilePromise = new Promise((resolve,reject) => {
  setTimeout(() => {
      resolve({userId:1,theme:"dark"})
  }, 2000);
});

// user: {id:1,name:ali,profile: {userId:1,theme:"dark"}}

// default function versiyon
async function done() {}

const getResult = async () => {
  try {
    const user = await userPromise; // 4s
    console.log('user', user);
    const profile = await profilePromise; // 2s
    console.log('profile', profile);
    const data = {... user, profile:{... profile}} // 6s de result ekrana basılacak.

    console.log('data', data);

  } catch (error) {
    console.log('hata')
  }
} 

getResult();