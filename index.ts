const sevenBin  = require( '7zip-bin')
import { add, extractFull } from 'node-7z'
const pathTo7zip = sevenBin.path7za

function index() {


    const seven = add('./compactado.7z', './hello-world.txt', {
      password: "shiro",
      $raw: [ '-mhe=on'],
      $bin: pathTo7zip,
    })

    seven.on('error', (err) => console.log(err))

    seven.on('end', () => console.log(seven.info))


}


function extract() {

  const seven = extractFull('./compactado.7z', './descompactados', {
    password: "shiro",
    $bin: pathTo7zip,
  })


}

index()