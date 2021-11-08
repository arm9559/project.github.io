const modalbutton = document.querySelector("#adduser").addEventListener('click',()=>{
    let modalfirst = document.querySelector("#asidefirst")
    modalfirst.style.display = "block"
    
    function icons(){
        const firsticon = document.querySelector('.iconfirst').addEventListener('click',()=>{
            modalfirst.style.display = "none"
        })
        const secondicon = document.querySelector('.iconsecond').addEventListener('click',()=>{
            let modalsecond = document.querySelector('#asidesecond')
            modalsecond.style.display = "none"
        })
    }
    icons()
})


          const adduser = document.getElementById("adduserbutton").addEventListener('click',() =>{
            let getname = document.querySelector('#namefirst').value
            let getid = document.querySelector('#idfirst').value
            let modalfirst = document.querySelector("#asidefirst")
            modalfirst.style.display = "none"
            if(getname == "" && getid == "" || getname == "" || getid == ""){
                alert("Please write")
            }
            else{
                const main = document.querySelector('main')
                const createuserscontainer = document.createElement('div')
                  createuserscontainer.setAttribute('class','user-container container col-sm-12 col-md-12 col-xs-12 col-lg-12')
                  main.appendChild(createuserscontainer)

                      let createspanone = document.createElement('span')
                            createspanone.setAttribute('class','span-one user-information')
                            createspanone.innerHTML = getname
                            createuserscontainer.append(createspanone)
                      let createspantwo = document.createElement('span')
                            createspantwo.setAttribute('class','span-two user-information')
                            createspantwo.innerHTML = getid
                            createuserscontainer.append(createspantwo)
                     let createspantree = document.createElement('span')
                            createspantree.setAttribute('class','span-tree user-information')
                            const date = new Date()
                            createspantree.innerHTML = "0" + date.getDate() + " " + date.getMonth() + " " + date.getFullYear()
                            createuserscontainer.append(createspantree)
                     let createspanfour = document.createElement('span')
                            createspanfour.setAttribute('class','span-four user-information')
                            let plus = 0
                            createspanfour.innerHTML = plus
                            createuserscontainer.append(createspanfour)

                            

                                let createbuttonsspan = document.createElement('span')
                                    createbuttonsspan.setAttribute('class','buttons-span')
                                    createuserscontainer.append(createbuttonsspan)
                                    let createElementButtonOne = document.createElement('button')
                                    createElementButtonOne.setAttribute('class','btn btn-success addlicense')
                                    let createElementButtonTwo = document.createElement('button')
                                    createElementButtonTwo.setAttribute('class','btn btn-danger remove')
                                    
                                    createElementButtonOne.innerHTML = "Add License"
                                    createElementButtonTwo.innerHTML = "Remove"
                                    createbuttonsspan.append(createElementButtonOne)
                                    createbuttonsspan.append(createElementButtonTwo)

                    let titles = document.createElement('div');
                    titles.setAttribute('class','user-child-container-one container col-sm-6')
                    main.append(titles)

                
                    let titlesfirstspan = document.createElement('span')
                    titlesfirstspan.setAttribute('class','license-title-one col-sm-2 opacity')
                    titlesfirstspan.innerHTML = "Licences"
                    titles.append(titlesfirstspan)

                    let titlessecondspan = document.createElement('span')
                    titlessecondspan.setAttribute('class','license-title-two col-sm-6 opacity')
                    titlessecondspan.innerHTML = "Expires"
                    titles.append(titlessecondspan)
                    let removeuserscontainer = document.querySelector('.remove').addEventListener('click',()=>{
                        let users = document.querySelector(".user-container")
                        let licences = document.querySelector('.user-child-container-one')
                        users.remove()
                        licences.remove()
                    })
            }
            let modalsecond = document.querySelector('.addlicense').addEventListener('click',() =>{
                let main = document.querySelector('main')


                let licencesname = document.getElementById("licencesname")
                let licencesdate = document.getElementById("licencesdate")

                let getsecondmodal = document.querySelector('.aside-second')
                getsecondmodal.style.display = "block"
                let getaddlicencesbutton = document.querySelector('.addlicensetwo').addEventListener('click',()=>{
                    let modalsecond = document.querySelector('#asidesecond')
                    modalsecond.style.display = "none"
                        let createchildusercontainer = document.createElement('div');
                        createchildusercontainer.setAttribute('class','user-container-two container col-sm-7')

                        let childsspanone = document.createElement('span')
                        childsspanone.setAttribute('class','user-first-span col-sm-3')
                        childsspanone.innerHTML = licencesname.value

                        let childsspantwo = document.createElement('span')
                        childsspantwo.setAttribute('class','user-second-span col-sm-5')
                        childsspantwo.innerHTML = licencesdate.value
                        

                        createchildusercontainer.append(childsspanone)
                        createchildusercontainer.append(childsspantwo)
                        main.appendChild(createchildusercontainer)

                      
                })
            })
        })

       

        function sclick(){
            let getbody = document.querySelector("#body");
            let title = document.querySelector('.subscription')
            title.style.borderBottom = "2px solid #18A7FF"
            title.style.opacity = "1"

            let getoffline = document.querySelector('.offline')
                getoffline.style.borderBottom = "none"
            
            getbody.style.display = "none"
            let getspans = document.querySelectorAll('.sp')

             let getname = document.querySelector('#namefirst').value
             let getid = document.querySelector('#idfirst').value

             let getsubs = document.getElementById("subscription")
             getsubs.style.display = "block"
             const date = new Date()
            for(let i = 0; i < getspans.length;i++){
                getspans[0].innerHTML = getname
                getspans[1].innerHTML = getid
                getspans[2].innerHTML = "0" + date.getDate() + " " + date.getMonth() + " " + date.getFullYear()
                getspans[3].innerHTML = 0
            }
        }

        function of(){
            let get = document.querySelector('#body')
            get.style.display = "block"

            let getsubs = document.getElementById("subscription")
             getsubs.style.display = "none"

             let offline = document.querySelector('.offline')
                offline.style.borderBottom = "2px solid #18A7FF"

                let subs = document.querySelector('.subscription')
                    subs.style.borderBottom = "none"

        }