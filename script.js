document.addEventListener("DOMContentLoaded", function () {
    const Database = {
        actions: [
            {desc: 'Bought tomatoes', action: 'Expense', money: 23, date: '23.01.2021'},
            {desc: 'Sold tomatoes', action: 'Income', money: 19, date: '13.02.2021'},
            {desc: 'Bought PC', action: 'Expense', money: 223, date: '23.03.2021'},
            {desc: 'Sold avocado', action: 'Income', money: 35, date: '23.04.2021'},

        ],
    };
    console.log(localStorage)


const Main = {
    events: function () {
        let buttonAdd = document.getElementById('add');
        buttonAdd.addEventListener('click', Functions.showActions)
        let buttonSubmit = document.getElementById('submit');
        buttonSubmit.addEventListener('click', Functions.addAction);
    }

}

const Functions ={

    loadActions: function() {
        return JSON.parse(localStorage.getItem('actions'));
    },

    saveActions: function(act){
        localStorage.setItem('actions',JSON.stringify(act));
    },

    renderTable: function(actions) {
      let view = '';
      actions.forEach((item) => {
          view += `
                    <tr><td>${item.desc}</td><td>${item.action}</td><td>${item.money}</td><td>${item.date}</td></tr>
                `
      });
      document.getElementById('table').innerHTML = view;

    },

    showActions: function () {
        let options = document.getElementById('options');
        options.style.display = 'block';
    },

    hideActions: function () {
        let options = document.getElementById('options');
        options.style.display = 'none';
    },

    addAction: function () {
        let action = document.getElementById('actions');
        let value = action.value;
        let desc = document.getElementById('desc').value;
        let date = new Date();
        let month = parseInt(date.getMonth()+1);
        let currentDate = date.getDate()+'-'+month+'-'+date.getFullYear()+'-'+date.getHours()+':'+date.getMinutes();
        let money = document.getElementById('money').value;
        let newAction = {desc: desc, action: value , money: parseInt(money) , date:currentDate};
        let actions = Functions.loadActions();
        actions.push(newAction);
        Functions.saveActions(actions);
        Functions.hideActions();
        Functions.renderTable(actions);

    }
}

let actions = Functions.loadActions();
Functions.renderTable(actions);
Main.events();
})