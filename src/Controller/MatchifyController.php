<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MatchifyController extends AbstractController
{
    #[Route('/', name: 'app_matchify')]
    public function index(): Response
    {
        return $this->render('matchify/index.html.twig', [
            'controller_name' => 'MatchifyController',
        ]);
    }
}
