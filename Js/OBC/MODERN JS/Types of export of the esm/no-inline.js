function group(){
  console.log('Export named no inline')
}

function exportDefaultNoInline(){
  console.log('Export named default no inline')
}

export{group}
export default exportDefaultNoInline