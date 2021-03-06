import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt,faUser } from '@fortawesome/free-solid-svg-icons';

export default class NavBar extends Component {
    render() {
        return (

            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#008272"}}>
            
                <a class="navbar-brand text-white" href="#"><b>SuitePlus</b></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav mr-auto">

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#"><b>Dashboard </b><span class="sr-only">(current)</span></a>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                        <li class="nav-item active">
                            <a class="nav-link text-white" href="#"><b>Category List</b><span class="sr-only">(current)</span></a>
                        </li>

                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
   
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown active" >                                
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <b>Admin Operation</b>
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Add Category</a>
                                    <a class="dropdown-item" href="#">Add StockManager</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Remove Category</a>
                                    <a class="dropdown-item" href="#">Remove StockManager</a>

                                </div>
                            </li>
                        </ul>
                        
                    </ul>

                    <form class="form-inline my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item dropdown active" >                                
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <FontAwesomeIcon className="faicons" icon={faUser} /><span>&nbsp;&nbsp;</span>
                                    <b>Damsiri Dilanjan</b>
                                </a>

                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Admin</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Profile</a>
                                    <a class="dropdown-item" href="#">Account Setting</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">
                                    <button class="btn btn-success my-2 my-sm-0" type="submit"> 
                                        <FontAwesomeIcon className="faicons" icon={faSignOutAlt} />
                                        Logout
                                        </button>
                                    </a>
                                </div>
                            </li>
                        </ul>                        
                    </form>

                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

                </div>
            </nav>
        )
    }
}
