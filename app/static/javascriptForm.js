(function(win, doc){
    'use strict'

    if(doc.getElementById("form")){
        let form = doc.getElementById("form")
        console.log(form)

        function sendForm(event){
            event.preventDefault()
            let data = new FormData(form)
            console.log(data)

            let ajax = new XMLHttpRequest()
            let token = doc.getElementsByTagName('input')[0].value
            console.log(token)

            ajax.open('POST', form.action)
            ajax.setRequestHeader('X-CSRF-TOKEN', token)
            ajax.onreadystatechange = function(){
                if(ajax.status === 200 && ajax.readyState === 4){
                    console.log('Cadastrou')
                    let result = doc.getElementById('result')
                    result.innerHTML = 'Operação feita com sucesso'
                    result.classList.add('alert')
                    result.classList.add('alert-success')
                }
            }
            ajax.send(data)
            form.reset()

        }
        form.addEventListener('submit', sendForm,)
    }
})(window,document)