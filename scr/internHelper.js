const internHelper = (role) => {
    return `
      <div class="col-md-3 card employeeCard border bg-custom">
      <div class="card-header">
          <h3>${role.name}</h3>
          <h5>Intern</h5>
      </div>
      <p class="card-text"> ID: ${role.id} </p>
      <p class="card-text"><a href="mailto:">${role.email}</a></p>
      <p class="card-text">${role.school}</p>
    </div>`
}
  
module.exports = internHelper