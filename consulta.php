<!DOCTYPE html>
<html>
<head>

  <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css" rel="stylesheet">
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css" rel="stylesheet">
  <link rel="stylesheet" href="css/animate.css"/>
  <link href="css/consulta.css" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
  <title>Consulta</title>
</head>
<body>
  <div id="preloder">
		<div class="loader"></div>
	</div>

  <div id="app">
  <v-app id="inspire">
    <v-card>
      <v-app-bar
        color="white"
      >
        <v-toolbar-title>Consulta pedidos</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon 
          large
          color="white darken-2"
          @click="next">
          mdi-cached
          </v-icon>
        </v-btn>
      </v-app-bar>
      <v-card-title>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Pesquisa"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="desserts"
        :search="search"
        multi-sort
        @click:row="Click"
      ></v-data-table>
    </v-card>
  </v-app>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js"></script>
  <script src="jquery-3.4.1.min.js"></script>
  <script src="js/consulta.js"></script>
</body>
</html>