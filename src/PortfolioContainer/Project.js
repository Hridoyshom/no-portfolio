import React from 'react';
import './Project.css'

const Project = () => {
    return (
        <div>
            <section id="project">
        <h1 class="headings">Projects</h1>
        <div class="row">
            <div class="box">
                <h1 class="headings">Electricity Service</h1>
                <p>
                    • One can avail electricity service by ordering from this site.
                <p>
                    • Firebase authentication login system is developed
                </p>
                <p>
                    • Registered user can choose service from the home page
                </p>
                </p>
                <a href="https://electricity-services.web.app/"target='_blank' > <button>Livve Site</button></a>
                <a href="https://github.com/Hridoyshom/electricity-service"target='_blank' > <button>Git hub</button></a>
            </div>
            <div class="box">
                <h1 class="headings">Ware-House management</h1>
                <p>
                    • It is a full stack project used MongoDB for database connection.
                <p>
                    • Logged in user can update information
                </p>
                <p>
                    •Firebase authentication applied
                </p>
                </p>
                <a href="https://watch-warehouse-fa9e9.web.app/"target='_blank' > <button>Live Site</button></a>
                <a  href="https://github.com/Hridoyshom/warehouse-manage-client-side" target='_blank' > <button>Git hub</button> </a>

            </div>
            <div class="box">
                <h1 class="headings">Parts Manufacturing</h1>
                <p>
                    • Full stack project with admin control system
                <p>
                    • Dashboard implemented
                </p>
                <p>
                    •CRUD operation is done in this project
                </p>
                </p>
                <a href="https://computer-parts-2a1a0.web.app/"target='_blank'><button>Live Site</button></a>
                <a href="https://github.com/Hridoyshom/computer-parts"target='_blank' > <button className='btn btn-secondary' >Git hub</button></a>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Project;