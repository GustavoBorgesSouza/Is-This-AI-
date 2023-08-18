import 'package:flutter/material.dart';
import 'package:ita_mobile/src/interactor/services/challenge_service.dart';
import 'package:ita_mobile/src/interactor/state/challenge_state.dart';

class ChallengeStore extends ValueNotifier<ChallengeState> {
  final ChallengeService service;

  ChallengeStore(this.service) : super(ChallengeState.start());

  Future<void> getChallenge() async {
    value = value.setLoading();
    value = await service.getChallenge(value);
  }
}
