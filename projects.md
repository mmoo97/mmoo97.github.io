---
layout: page
title: Projects
nav-menu: true
---

<!-- Main -->
<div id="main" class="alt">

<!-- One -->
<section id="one">
		<header class="major">
			<h1>Projects</h1>
		</header>

<!-- Content -->
<h2 id="content">HPC Cluster DTN Tester</h2>
<div class="row 200%">
	<div class="6u 12u$(medium)">
<span class="image fit"><img src="{% link assets/images/globus_trans.jpg %}" alt="" /></span>

<ul class="actions fit">
	<li><a href="https://gitlab.rc.uab.edu/mmoo97/DTN_tests" target="_blank" class="button special fit">Go to Repo</a></li>
</ul>
<h4>Technologies Used</h4>
<ul>
    <li>Cron</li>
    <li>Globus Api</li>
    <li>Bash</li>
    <li>Linux (CentOS)</li>
    <li>Python</li>
    <li>Tmux</li>
    <li>Anaconda3</li>
    <li>Jupyter Notebooks</li>
    <li>Docker</li>
    <li>Singularity</li>
</ul>
</div>
<div class="6u$ 12u$(medium)">
<h3>What does this project do?</h3>
<hr />
<p>This application utilizes the <a href="https://www.globus.org/" target="_blank">Globus API</a> in order to submit test 
dataset transfers between two or more Globus endpoints and get the upload and download speeds
at multiple regular intervals during the day. The backend of this project works by creating a user-tailored crontab which 
will call a customized bash script that will supply environment variables and submit a 
<a href="https://slurm.schedmd.com/overview.html" target="_blank">Slurm</a> job that will run within a container context, 
run through transfers of various sizes, get the effective speed, and write out to a formatted <code>.csv</code> file.
The second step of this project walks the user through a <a href="https://jupyter.org/" target="_blank">Jupyter Notebook</a>
to then analyze the data collected (shown <a href="https://gitlab.rc.uab.edu/mmoo97/DTN_tests/-/blob/v1.0.0/publish/DTN_notebook.ipynb" target="_blank">here</a>).
The third and final component of this project is to implement Machine Learning to then figure out expected cluster transfer times
to conventience the user. This phase of the project is currently underway under the branch <code>feat-ml</code>. </p>
<h3>TLDR;</h3>
<hr />
<p>Collects transfer data to help display expected transfer speeds on the <b>University of Alabama at Birmingham's</b> High 
Performance Computing Cluster, <b><a href="https://www.uab.edu/it/home/research-computing/cheaha" target="_blank">Cheaha</a></b>.
</p>

</div>
</div>
<hr />

<h2 id="content">Flask Cluster Self-Registration</h2>
<div class="row 200%">
	<div class="6u 12u$(medium)">
<span class="image fit"><img src="{% link assets/images/flask_ex.jpg %}" alt="" /></span>

<ul class="actions fit">
	<li><a href="https://gitlab.rc.uab.edu/mmoo97/flask_user_reg" target="_blank" class="button special fit">Go to Repo</a></li>
</ul>
<h4>Technologies Used</h4>
<ul>
    <li>Flask</li>
    <li>RabbitMQ</li>
    <li>Python</li>
    <li>Linux (CentOS)</li>
    <li>Openstack</li>
    <li>Terraform</li>
    <li>Packer</li>
    <li>Jinja</li>
    <li>Bash</li>
</ul>
</div>
<div class="6u$ 12u$(medium)">
<h3>What does this project do?</h3>
<hr />
<p>This project utilizes a microservice architecture to run various account agents that check account creation requests
on <b><a href="https://www.uab.edu/it/home/research-computing/cheaha">Cheaha</a></b> (UAB's Supercomputing Cluster)
via a messaging queue and will then automatically fullfill them. Testing this project is tested using a development cluster
provisioned via a <b><a href="https://gitlab.rc.uab.edu/mmoo97/terraform-openstack" target="_blank">Terraform/Openstack Script</a></b>.
<br>
<br>
<sup><b>*Note:</b> This repo has been advanced in a separate, private repository in order to prepare for production deployment.</sup></p>
</div>
</div>
<hr />


<h2 id="content">Project 3</h2>
<div class="row 200%">
	<div class="6u 12u$(medium)">
<span class="image fit"><img src="{% link assets/images/pic03.jpg %}" alt="" /></span>

<ul class="actions fit">
	<li><a href="#" target="_blank" class="button special fit">Go to Repo</a></li>
</ul>
</div>
<div class="6u$ 12u$(medium)">
<h3>About Project 3</h3>
<p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>.
This is <sup>superscript</sup> text and this is <sub>subscript</sub> text.
This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>.
Finally, this is a <a href="#">link</a>.</p>
</div>
</div>
<hr />
</section>
</div>