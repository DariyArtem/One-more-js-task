//document.addEventListener("DOMContentLoaded", function () {
    const Database = {
        actions: [
            {desc: 'Bought tomatoes', action: 'Expense', money: 4, date: '05-January-2020'},
            {desc: 'Sold tomatoes', action: 'Income', money: 10, date: '05-January-2020'},
            {desc: 'Bought an apple', action: 'Expense', money: 3, date: '06-January-2020'},
            {desc: 'Sold an iPad', action: 'Income', money: 19, date: '06-January-2020'},
            {desc: 'Bought PC', action: 'Expense', money: 23, date: '10-January-2020'},
            {desc: 'Sold avocado', action: 'Income', money: 30, date: '10-January-2020'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 21, date: '11-January-2020'},
            {desc: 'Sold tomatoes', action: 'Income', money: 8, date: '13-January-2020'},
            {desc: 'Bought an apple', action: 'Expense', money: 15, date: '14-January-2020'},
            {desc: 'Sold an iPad', action: 'Income', money: 19, date: '16-January-2020'},
            {desc: 'Bought PC', action: 'Expense', money: 25, date: '18-January-2020'},
            {desc: 'Sold avocado', action: 'Income', money: 35, date: '20-January-2020'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 23, date: '23-January-2020'},
            {desc: 'Sold tomatoes', action: 'Income', money: 19, date: '25-January-2020'},
            {desc: 'Bought an apple', action: 'Expense', money: 6, date: '25-January-2020'},
            {desc: 'Sold an iPad', action: 'Income', money: 17, date: '26-January-2020'},
            {desc: 'Bought PC', action: 'Expense', money: 24, date: '28-January-2020'},
            {desc: 'Sold avocado', action: 'Income', money: 36, date: '29-January-2020'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 4, date: '05-January-2021'},
            {desc: 'Sold tomatoes', action: 'Income', money: 10, date: '05-January-2021'},
            {desc: 'Bought an apple', action: 'Expense', money: 3, date: '06-January-2021'},
            {desc: 'Sold an iPad', action: 'Income', money: 19, date: '06-January-2021'},
            {desc: 'Bought PC', action: 'Expense', money: 23, date: '10-January-2021'},
            {desc: 'Sold avocado', action: 'Income', money: 30, date: '10-January-2021'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 21, date: '11-January-2021'},
            {desc: 'Sold tomatoes', action: 'Income', money: 8, date: '13-January-2021'},
            {desc: 'Bought an apple', action: 'Expense', money: 15, date: '14-January-2021'},
            {desc: 'Sold an iPad', action: 'Income', money: 19, date: '16-January-2021'},
            {desc: 'Bought PC', action: 'Expense', money: 25, date: '18-January-2021'},
            {desc: 'Sold avocado', action: 'Income', money: 35, date: '20-January-2021'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 23, date: '23-January-2021'},
            {desc: 'Sold tomatoes', action: 'Income', money: 19, date: '25-January-2021'},
            {desc: 'Bought an apple', action: 'Expense', money: 6, date: '25-January-2021'},
            {desc: 'Sold an iPad', action: 'Income', money: 17, date: '26-January-2021'},
            {desc: 'Bought PC', action: 'Expense', money: 24, date: '28-January-2021'},
            {desc: 'Sold avocado', action: 'Income', money: 36, date: '29-January-2021'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 11, date: '02-February-2021'},
            {desc: 'Sold tomatoes', action: 'Income', money: 12, date: '03-February-2021'},
            {desc: 'Bought an apple', action: 'Expense', money: 33, date: '03-February-2021'},
            {desc: 'Sold an iPad', action: 'Income', money: 115, date: '04-February-2021'},
            {desc: 'Bought PC', action: 'Expense', money: 6, date: '05-February-2021'},
            {desc: 'Sold avocado', action: 'Income', money: 5, date: '06-February-2021'},
            {desc: 'Bought tomatoes', action: 'Expense', money: 23, date: '10-February-2021'},
            {desc: 'Sold tomatoes', action: 'Income', money: 9, date: '11-February-2021'},
            {desc: 'Bought an apple', action: 'Expense', money: 13, date: '13-February-2021'},
            {desc: 'Sold an iPad', action: 'Income', money: 15, date: '14-February-2021'},
            {desc: 'Bought PC', action: 'Expense', money: 73, date: '16-February-2021'},
            {desc: 'Sold avocado', action: 'Income', money: 44, date: '19-February-2021'},
            {desc: '1', action: 'Expense', money: 6, date: '01-October-2021'},
            {desc: '2', action: 'Income', money: 12, date: '01-October-2021'},
            {desc: '3', action: 'Expense', money: 24, date: '02-October-2021'},
            {desc: '4', action: 'Income', money: 36, date: '02-October-2021'},
            {desc: '5', action: 'Expense', money: 11, date: '003-October-2021'},
            {desc: '6', action: 'Income', money: 12, date: '03-October-2021'},
            {desc: '7', action: 'Expense', money: 33, date: '04-October-2021'},
            {desc: '8', action: 'Income', money: 35, date: '04-October-2021'},
            {desc: '9', action: 'Expense', money: 26, date: '05-October-2021'},
            {desc: '10', action: 'Income', money: 35, date: '05-October-2021'},
            {desc: '11', action: 'Expense', money: 23, date: '05-October-2021'},
            
       ],
   };

   const monthNames = ["January", "February", "March", "April", "May", "June",
   "July", "August", "September", "October", "November", "December"];

$(document).ready(function(){
   const Main = {
       events: function () {
           $(function (){
               $('#add').click(Functions.showForm)
           })
           $(function () {
               $('#submit').click(Functions.addAction)
           });
           $(function () {
               $('#select-date').click(Functions.selectDate)
           })
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

       showForm: function () {
           let options = document.getElementById('options');
           options.style.display = 'block';
       },

       hideFrom: function () {
           let options = document.getElementById('options');
           options.style.display = 'none';
       },

       addAction: function () {
           let action = document.getElementById('actions');
           let value = action.value;
           let desc = document.getElementById('desc').value;
           let date = new Date();
           let currentMonth = monthNames[date.getMonth()];
           let currentYear = date.getFullYear() 
           let currentDate = date.getDate()+'-'+currentMonth+'-'+currentYear;
           let money = document.getElementById('money').value;
           let newAction = {desc: desc, action: value , money: parseInt(money) , date:currentDate};
           let actions = Functions.loadActions();
           actions.push(newAction);
           Functions.saveActions(actions);
           Functions.hideFrom();
           document.getElementById('money').value = '';
           document.getElementById('desc').value = '';
           let table = Functions.sortActions(currentMonth, String(currentYear));
           Functions.getData(table, currentMonth, currentYear);
       },

       renderYears: function(){
        let view = '';
        let years = Functions.getYears()
        years.forEach((item) => {
            view += `
                <option>${item}</option>
            `
        });
        document.getElementById('year').innerHTML = view;
       },
       
       selectDate: function () {
           let month = document.getElementById('Months');
           let curMonth = month.value;
           let year = document.getElementById('year');
           let curYear = year.value;
           let actions = Functions.sortActions(curMonth, curYear);
           Functions.getData(actions, curMonth, curYear);
       },

       getYears: function(){
            let actions = Functions.loadActions();
            let years = []; 
            actions.filter(obj=>{
                years.push(obj.date.split('-')[2]);
            });
            return new Set(years);
       },

       sortActionsByIncome: function (actions) {
           return actions.filter(obj =>{
               return obj.action === 'Income';
           });
       },

       sortActionsByExpense: function (actions) {
           return actions.filter(obj => {
              return obj.action === 'Expense';
          });
       },

       sortActions: function(selectedMonth = '', year = ''){
           let actions = Functions.loadActions();
           let sortedActionsByMonth = actions.filter(obj=>{
               return obj.date.split('-')[1] === selectedMonth;
           });
           let sortedActions = sortedActionsByMonth.filter(obj=>{
               return obj.date.split('-')[2] === year;
           });
           return sortedActions;
       },

       createCanvas: function(){
           let canvas = document.getElementById('canv');
           canvas.innerHTML = `<canvas id="myChart" width="500" height="500"></canvas>`;
       },

       destroyCanvas: function(){
           let canvas = document.getElementById('canv');
           canvas.innerHTML = '';
       },

       getData: function(actions, month, year){
           Functions.renderTable(actions);
           let income = Functions.sortActionsByIncome(actions);
           let expense = Functions.sortActionsByExpense(actions);
           let incomeMoney = 0;
           income.forEach(item =>{
               incomeMoney+=item.money;
           });
           let expenseMoney = 0;
           expense.forEach(item=>{
               expenseMoney+=item.money;
           });
           Functions.destroyCanvas();
           Functions.renderChart(month, year, incomeMoney, expenseMoney);
       },

       renderMessage: function (){
           document.getElementById('canv').innerHTML = `<br><h2>No data have been selected for selected date</h2>`;
       },

        renderChart: function (month, year, income, expense) {
           if (income === 0 && expense === 0){
               Functions.renderMessage();
           } else{
               Functions.createCanvas();
               let canvas = document.getElementById('myChart');
               let context = canvas.getContext('2d');
               let myChart = new Chart(context, {
                   type: 'bar',
                   data: {
                       labels: ['Income', 'Expense'] ,
                       datasets: [{
                           label: month +' of '+year,
                           data: [income, expense],
                           backgroundColor:[ 'green', 'red'],
                           borderColor: ['darkgreen', 'darkred'],
                           borderWidth: 1
                       }]
                   },
                   options: {
                       scales: {
                           y: {
                               beginAtZero: true
                           }
                       }
                   },
                   annotation: {
                       annotations: [{
                           type: 'line',
                           mode: 'horizontal',
                           scaleID: 'y-axis-0',
                           value: '255',
                           borderColor: 'black',
                           borderWidth: 2
                       }]
                   }
               });
           }
       }
   }
   Main.events();
   Functions.renderYears();
});
