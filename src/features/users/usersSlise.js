import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  list: [
    {
      "id": "1",
      "login": "alex123",
      "password": "qwertyPass1!",
      "email": "alex123@example.com"
    },
    {
      "id": "2",
      "login": "maria_k",
      "password": "securePass22$",
      "email": "maria.k@example.com"
    },
    {
      "id": "3",
      "login": "john_doe",
      "password": "john2025!@#",
      "email": "john.doe@example.com"
    },
    {
      "id": "4",
      "login": "irina89",
      "password": "IrinaPass_89",
      "email": "irina89@example.com"
    },
    {
      "id": "5",
      "login": "maxDev",
      "password": "MaxDev#2025",
      "email": "max.dev@example.com"
    },
    {
      "id": "6",
      "login": "svetlana77",
      "password": "Svetlana_77$",
      "email": "svetlana77@example.com"
    },
    {
      "id": "7",
      "login": "peter_prog",
      "password": "PeterDev!2025",
      "email": "peter.prog@example.com"
    },
    {
      "id": "8",
      "login": "dasha_code",
      "password": "DashaC0de#88",
      "email": "dasha.code@example.com"
    },
    {
      "id": "9",
      "login": "oleg_22",
      "password": "OlegPass22!",
      "email": "oleg22@example.com"
    },
    {
      "id": "10",
      "login": "victoria_dev",
      "password": "Victoria#2025",
      "email": "victoria.dev@example.com"
    },
    {
      "id": "11",
      "login": "andrew1990",
      "password": "Andrew_1990!",
      "email": "andrew1990@example.com"
    },
    {
      "id": "12",
      "login": "elena_web",
      "password": "ElenaWeb#33",
      "email": "elena.web@example.com"
    },
    {
      "id": "13",
      "login": "danil_dev",
      "password": "DanilDev!55",
      "email": "danil.dev@example.com"
    },
    {
      "id": "14",
      "login": "anastasia88",
      "password": "Anastasia_88$",
      "email": "anastasia88@example.com"
    },
    {
      "id": "15",
      "login": "nikolay_coder",
      "password": "NikCoder@2025",
      "email": "nikolay.coder@example.com"
    },
    {
      "id": "16",
      "login": "valeria_it",
      "password": "Valeria_2025!",
      "email": "valeria.it@example.com"
    },
    {
      "id": "17",
      "login": "artem_dev",
      "password": "ArtemPass#17",
      "email": "artem.dev@example.com"
    },
    {
      "id": "18",
      "login": "natalia33",
      "password": "Natalia33!_",
      "email": "natalia33@example.com"
    },
    {
      "id": "19",
      "login": "sergey88",
      "password": "Sergey_88Pass",
      "email": "sergey88@example.com"
    },
    {
      "id": "20",
      "login": "yulia_web",
      "password": "YuliaWeb!99",
      "email": "yulia.web@example.com"
    },
    {
      "id": "21",
      "login": "denis_code",
      "password": "Denis#2025",
      "email": "denis.code@example.com"
    },
    {
      "id": "22",
      "login": "inna_dev",
      "password": "Inna_Dev88!",
      "email": "inna.dev@example.com"
    },
    {
      "id": "23",
      "login": "ivan_prog",
      "password": "IvanProg#23",
      "email": "ivan.prog@example.com"
    },
    {
      "id": "24",
      "login": "dmitry2000",
      "password": "Dmitry_2000!",
      "email": "dmitry2000@example.com"
    },
    {
      "id": "25",
      "login": "olga_it",
      "password": "OlgaPass@25",
      "email": "olga.it@example.com"
    },
    {
      "id": "26",
      "login": "alexey_dev",
      "password": "Alexey#Dev26",
      "email": "alexey.dev@example.com"
    },
    {
      "id": "27",
      "login": "katerina77",
      "password": "Katerina_77$",
      "email": "katerina77@example.com"
    },
    {
      "id": "28",
      "login": "roman_prog",
      "password": "Roman2025!@",
      "email": "roman.prog@example.com"
    },
    {
      "id": "29",
      "login": "tatiana99",
      "password": "Tatiana_99!",
      "email": "tatiana99@example.com"
    },
    {
      "id": "30",
      "login": "serafima_it",
      "password": "Serafima#30",
      "email": "serafima.it@example.com"
    },
    {
      "id": "31",
      "login": "ilya_dev",
      "password": "IlyaPass!31",
      "email": "ilya.dev@example.com"
    },
    {
      "id": "32",
      "login": "vera88",
      "password": "Vera_88Pass",
      "email": "vera88@example.com"
    },
    {
      "id": "33",
      "login": "stas_prog",
      "password": "StasProg#33",
      "email": "stas.prog@example.com"
    },
    {
      "id": "34",
      "login": "arina_web",
      "password": "ArinaWeb!34",
      "email": "arina.web@example.com"
    },
    {
      "id": "35",
      "login": "grigory_dev",
      "password": "Grigory#35",
      "email": "grigory.dev@example.com"
    },
    {
      "id": "36",
      "login": "polina_it",
      "password": "Polina_2025!",
      "email": "polina.it@example.com"
    },
    {
      "id": "37",
      "login": "vadim_code",
      "password": "Vadim#37",
      "email": "vadim.code@example.com"
    },
    {
      "id": "38",
      "login": "ksenia_dev",
      "password": "Ksenia!38",
      "email": "ksenia.dev@example.com"
    },
    {
      "id": "39",
      "login": "egor_prog",
      "password": "EgorPass_39",
      "email": "egor.prog@example.com"
    },
    {
      "id": "40",
      "login": "sofia_web",
      "password": "Sofia#40",
      "email": "sofia.web@example.com"
    },
    {
      "id": "41",
      "login": "anton_dev",
      "password": "Anton_41!",
      "email": "anton.dev@example.com"
    },
    {
      "id": "42",
      "login": "milena77",
      "password": "Milena#77Pass",
      "email": "milena77@example.com"
    },
    {
      "id": "43",
      "login": "nikita_prog",
      "password": "Nikita#43",
      "email": "nikita.prog@example.com"
    },
    {
      "id": "44",
      "login": "larisa_it",
      "password": "Larisa_44!",
      "email": "larisa.it@example.com"
    },
    {
      "id": "45",
      "login": "vitaly_dev",
      "password": "VitalyPass@45",
      "email": "vitaly.dev@example.com"
    },
    {
      "id": "46",
      "login": "alla_web",
      "password": "Alla#46Pass",
      "email": "alla.web@example.com"
    },
    {
      "id": "47",
      "login": "timur_prog",
      "password": "Timur#47!",
      "email": "timur.prog@example.com"
    },
    {
      "id": "48",
      "login": "lyudmila_it",
      "password": "Lyudmila#48",
      "email": "lyudmila.it@example.com"
    },
    {
      "id": "49",
      "login": "artemiy_dev",
      "password": "Artemiy@49",
      "email": "artemiy.dev@example.com"
    },
    {
      "id": "50",
      "login": "galina_web",
      "password": "Galina!50",
      "email": "galina.web@example.com"
    }
  ]

}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addToUsers: (state, action) => {
      state.list.push(action.payload)
    },
    changeUser: (state, action) => {
      const { id, login, password, email } = action.payload
      const user = state.list.find(user => user.id === id);
      if (user.login === login && user.password === password && user.email === email) return
      user.login = login;
      user.password = password;
      user.email = email
    },
    deleteUser: (state, action) => { state.list = state.list.filter(user => user.id != action.payload) }
  }
})

export const { addToUsers, changeUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer