const usersMidiaSocial = {
  github: 'savio-fju',
  youtube: 'xvGBot1XBWxqpp6ALkf_Eg',
  instagram: 'savio.uckg',
  facebook: 'savio.uckg',
  twitter: 'saviouckg'

}

function changeSocialMediaLinks(){
  for(let li of socialLinks.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${usersMidiaSocial[social]}`
    alert(li.children[0].href)
  
  }

}

changeSocialMediaLinks()