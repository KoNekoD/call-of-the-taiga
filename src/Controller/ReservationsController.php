<?php

declare(strict_types=1);

namespace App\Controller;

use App\Dto\ReservationInputDto;
use App\Service\ReservationHandler;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Attribute\MapRequestPayload;
use Symfony\Component\Routing\Attribute\Route;

class ReservationsController extends AbstractController
{
    public function __construct(private readonly ReservationHandler $reservationHandler) {}

    #[Route('/reservations', name: 'app_reservations_index', methods: Request::METHOD_GET)]
    public function index(): Response
    {
        return $this->render('reservations/index.html.twig');
    }

    #[Route('/reservations', name: 'app_reservations_action', methods: Request::METHOD_POST)]
    public function action(#[MapRequestPayload] ReservationInputDto $dto): Response
    {
        $this->reservationHandler->reserve($dto);

        return $this->render('reservations/index.html.twig');
    }
}
