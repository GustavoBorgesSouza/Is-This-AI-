import 'package:flutter/material.dart';
import 'package:ita_mobile/src/data/service/challenge_sevice_impl.dart';
import 'package:ita_mobile/src/interactor/services/challenge_service.dart';
import 'package:ita_mobile/src/interactor/stores/challenge_store.dart';
import 'package:provider/provider.dart';
import 'package:uno/uno.dart';

import 'src/ui/app_widget.dart';

void main() {
  final app = MultiProvider(
    providers: [
      Provider.value(value: Uno()),
      Provider<ChallengeService>(
          create: (ctx) => ChallengeServiceImpl(ctx.read())),
      ChangeNotifierProvider(create: (ctx) => ChallengeStore(ctx.read()))
    ],
    child: const AppWidget(),
  );
  runApp(app);
}
