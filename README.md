# UP Address Book

Proyecto para la materia Arquitectura Web.

## Integrantes

- Ávila, Darío
- Gelis, Damián Ignacio

## Temática de la aplicación

Agenda para guardar a tus personas conocidas de la UP.

## Descripción de la aplicación

La aplicación permitirá:

- Administrar un contacto (alta, baja, modificación, listado)
- Administrar un grupo de contactos (alta, baja, modificación, listado)
- Ordenar los contactos por orden alfabético o frecuencia
- Ordenar los grupos de contactos por orden alfabético o frecuencia
- Imprimir la lista de contactos

Atributos:

- Atributos de un grupo de contactos:
  - ID
  - Nombre
  - Apellido
  - Teléfono (celular, casa, trabajo)
  - Email (personal, trabajo)
  - Foto
  - Skype
  - Google Hangouts
  - Facebook
  - Dirección
  - Notas
  - Grupo

- Atributos de un grupo:
  - ID
  - Nombre
  - Contactos

## Endpoints de la API REST

URL                                           | Verbo HTTP | Body       | Resultado
:-------------------------------------------: | :--------: | :--------: | :---------------------------------------------------------------------------:
/contacts                                     | GET        | Vacío      | Retorna todos los contactos
/contacts                                     | POST       | Trama JSON | Crea un contacto
/contacts/:id                                 | GET        | Vacío      | Retorna un contacto determinado
/contacts/:id                                 | PUT        | Trama JSON | Actualiza un contacto determinado
/contacts/:id                                 | DELETE     | Vacío      | Borra un contacto determinado
/contacts?sort=alphabetically\|frequency      | GET        | Vacío      | Retorna todos los contactos, ordenados bajo un criterio determinado
/contactGroups                                | GET        | Vacío      | Retorna todos los grupos de contactos
/contactGroups                                | POST       | Trama JSON | Crea un grupo de contactos
/contactGroups/:id                            | GET        | Vacío      | Retorna un grupo de contactos determinado
/contactGroups/:id                            | PUT        | Trama JSON | Actualiza un grupo de contactos determinado
/contactGroups/:id                            | DELETE     | Vacío      | Borra un grupo de contactos determinado
/contactGroups?sort=alphabetically\|frequency | GET        | Vacío      | Retorna todos los grupos de contactos, ordenados bajo un criterio determinado
/contactGroups/:id/contacts                   | GET        | Vacío      | Retorna los contactos de un grupo de contactos determinado
/contactGroups/:id/contacts/:id               | GET        | Vacío      | Retorna un contacto determinado de un grupo de contactos determinado

---

Universidad de Palermo - Facultad de Ingeniería
