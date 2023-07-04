"use strict";
(self.webpackChunkweb = self.webpackChunkweb || []).push([
  [6385],
  {
    73681: (Me, pe, l) => {
      l.d(pe, { l: () => N });
      var D = l(61031),
        ne = l(13428),
        ce = l(91410),
        j = l(5e3);
      let N = (() => {
        class K {
          constructor(E, F, W) {
            (this.ttrsApi = E),
              (this.store = F),
              (this.play2Store = W),
              (this.namespace = "Gig"),
              (this.endpoints = {
                gigGameConfig: "gigGameConfig",
                userGigSettings: "userGigSettings",
                classGigAnswers: "classGigAnswers",
                lastGamelog: "lastGamelog",
                delete: "delete",
              });
          }
          userGigSettings(E = this.store.user.id) {
            return new Promise((F, W) => {
              this.ttrsApi
                .post(
                  { userId: E },
                  this.namespace,
                  this.endpoints.userGigSettings
                )
                .toPromise()
                .then(
                  (re) => {
                    if (+this.store.user.id != +E) return F(re);
                    re
                      ? ((this.play2Store.userGigSettings = re), F(re))
                      : this.play2Store.userGigSettings.then((Ee) => F(Ee));
                  },
                  (re) => this.play2Store.userGigSettings.then((Y) => F(Y))
                );
            });
          }
          gigGameConfig() {
            return new Promise((E, F) => {
              this.ttrsApi
                .post(
                  { userId: this.store.user.id },
                  this.namespace,
                  this.endpoints.gigGameConfig
                )
                .toPromise()
                .then(
                  (W) => {
                    W
                      ? ((this.play2Store.gigGameConfig = W), E(W))
                      : this.play2Store.gigGameConfig.then((re) => E(re));
                  },
                  (W) => this.play2Store.gigGameConfig.then((re) => E(re))
                );
            });
          }
          classGigAnswers(E, F) {
            return this.ttrsApi
              .post(
                { userIds: F, timestamps: E },
                this.namespace,
                this.endpoints.classGigAnswers
              )
              .toPromise();
          }
          lastGamelog(E) {
            return this.ttrsApi
              .post({ userId: E }, this.namespace, this.endpoints.lastGamelog)
              .toPromise();
          }
          delete(E, F) {
            return this.ttrsApi
              .post(
                { clientGameCreatedAt: E, userId: F },
                this.namespace,
                this.endpoints.delete
              )
              .toPromise();
          }
        }
        return (
          (K.ɵfac = function (E) {
            return new (E || K)(j.LFG(D.s), j.LFG(ce.d), j.LFG(ne.J));
          }),
          (K.ɵprov = j.Yz7({ token: K, factory: K.ɵfac, providedIn: "root" })),
          K
        );
      })();
    },
    58804: (Me, pe, l) => {
      l.d(pe, { s: () => re });
      var D = l(70655),
        ne = l(73175),
        ce = l(91410),
        j = l(15439),
        K = l(591),
        C = l(84249),
        E = l(20923),
        F = l(5e3),
        W = l(92302);
      let re = (() => {
        class Y {
          constructor(me, Le, we, H) {
            (this.router = me),
              (this.authService = Le),
              (this.jwtService = we),
              (this.store = H),
              (this.manuallyTriggerCheckLoginTime = new K.X(null)),
              (this.jwtHelper = new ne.N0());
          }
          gotoLogin() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              yield this.authService.logout(200),
                this.router.navigateByUrl("/auth");
            });
          }
          checkExpiredLoginTime() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              if (this.store.offline) return !1;
              const me = yield this.jwtService.getJwt(),
                Le = this.jwtHelper.decodeToken(me),
                we = Math.round(
                  j.duration(j.unix(Le.exp).diff(j())).asMinutes()
                );
              return (
                !!this.authService.checkExpiredCurfewTime() ||
                (!!this.expiryDuration(we) && (this.gotoLogin(), !0))
              );
            });
          }
          expiryDuration(me) {
            return me < 5;
          }
        }
        return (
          (Y.ɵfac = function (me) {
            return new (me || Y)(
              F.LFG(W.F0),
              F.LFG(C.e),
              F.LFG(E.T),
              F.LFG(ce.d)
            );
          }),
          (Y.ɵprov = F.Yz7({ token: Y, factory: Y.ɵfac, providedIn: "root" })),
          Y
        );
      })();
    },
    23036: (Me, pe, l) => {
      l.d(pe, { V: () => N });
      var D = l(59427),
        ne = l(59507),
        ce = l(34824),
        j = l(5e3);
      let N = (() => {
        class K {}
        return (
          (K.ɵfac = function (E) {
            return new (E || K)();
          }),
          (K.ɵmod = j.oAB({ type: K })),
          (K.ɵinj = j.cJS({ imports: [D.e, ne.k, ce.i] })),
          K
        );
      })();
    },
    78528: (Me, pe, l) => {
      l.d(pe, { G: () => lt });
      var D = l(70655),
        ne = l(33062),
        ce = l(28547),
        j = l(73681),
        N = l(24850),
        K = l(61031),
        C = l(5e3),
        E = l(2836);
      let F = (() => {
        class J {
          constructor(e, n) {
            (this.bots = e),
              (this.ttrsApi = n),
              (this.namespace = "Lite"),
              (this.endpoints = {
                rocknameAvatars: "rocknameAvatars",
                leaderBoard: "leaderBoard",
                saveScore: "saveScore",
                updateUser: "updateUser",
              });
          }
          rocknameAvatars() {
            const e = [];
            for (let n = 0; n < 6; n++)
              e.push({
                rockname: this.bots.randomName(),
                image: this.bots.randomAvatar(),
              });
            return e;
          }
          leaderBoard(e, n) {
            return this.ttrsApi
              .post(
                { competition: e, uid: n },
                this.namespace,
                this.endpoints.leaderBoard
              )
              .pipe((0, N.U)((o) => this.convertLeaderboard(o)))
              .toPromise();
          }
          convertLeaderboard(e) {
            if (null == e || !e.length) return [];
            const n = +e[0].score;
            return e.map((o) => ({
              id: o.id,
              active: !!+o.active,
              image: o.image,
              score: +o.score,
              scoreWrong: +o.scoreWrong,
              rockname: o.rockname,
              flexAmount: this.flexAmount(n, +o.score),
            }));
          }
          flexAmount(e, n) {
            const o = 100 - ((e - n) / e) * 100;
            return o ? `${o}%` : "0.001";
          }
          saveScore(e, n, o, a) {
            return this.ttrsApi
              .post(
                { results: e, user: n, competition: a, key: o },
                this.namespace,
                this.endpoints.saveScore
              )
              .toPromise();
          }
          updateUser(e, n) {
            return this.ttrsApi
              .post(
                { user: e, competition: n },
                this.namespace,
                this.endpoints.updateUser
              )
              .toPromise();
          }
        }
        return (
          (J.ɵfac = function (e) {
            return new (e || J)(C.LFG(E.e), C.LFG(K.s));
          }),
          (J.ɵprov = C.Yz7({ token: J, factory: J.ɵfac, providedIn: "root" })),
          J
        );
      })();
      var W = l(43344),
        re = l(9681),
        Y = l(79965),
        Ee = l(46542),
        me = l(25766),
        Le = l(83238),
        we = l(63305),
        H = l(22477),
        Ae = l(399),
        Pe = l(17361),
        X = l(25623),
        Oe = l(81547),
        d = l(72086),
        m = l(31938),
        v = l(27754),
        O = l(91410),
        L = l(15439),
        A = l(8929),
        M = l(591),
        Se = l(61221),
        ge = l(96831),
        x = l(68896),
        ee = l(36053),
        I = l(21086),
        Be = l(34202),
        it = l(67876);
      const $e = new Be.y(it.Z);
      var nt = l(88514),
        Fe = l(98723),
        He = l(61715),
        Xe = l(5254),
        Ke = l(36787),
        We = l(18583),
        oe = l(92198),
        k = l(2994),
        xe = l(61709),
        be = l(40537),
        ue = l(87545),
        _ = l(88117),
        ve = l(1059),
        ze = l(5154),
        Je = l(31307),
        rt = l(826),
        Ze = l(40448);
      class qe {
        constructor(ae, e) {
          (this.observables = ae), (this.project = e);
        }
        call(ae, e) {
          return e.subscribe(new at(ae, this.observables, this.project));
        }
      }
      class at extends rt.L {
        constructor(ae, e, n) {
          super(ae),
            (this.observables = e),
            (this.project = n),
            (this.toRespond = []);
          const o = e.length;
          this.values = new Array(o);
          for (let a = 0; a < o; a++) this.toRespond.push(a);
          for (let a = 0; a < o; a++)
            this.add((0, Ze.D)(this, e[a], void 0, a));
        }
        notifyNext(ae, e, n) {
          this.values[n] = e;
          const o = this.toRespond;
          if (o.length > 0) {
            const a = o.indexOf(n);
            -1 !== a && o.splice(a, 1);
          }
        }
        notifyComplete() {}
        _next(ae) {
          if (0 === this.toRespond.length) {
            const e = [ae, ...this.values];
            this.project ? this._tryProject(e) : this.destination.next(e);
          }
        }
        _tryProject(ae) {
          let e;
          try {
            e = this.project.apply(this, ae);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(e);
        }
      }
      var De = l(72986),
        ct = l(2313),
        Ie = l(44290),
        et = l(86434),
        tt = l(11059),
        Ne = l(13428),
        Ve = l(19645),
        ht = l(6937),
        st = l(51062);
      let lt = (() => {
        class J {
          constructor(
            e,
            n,
            o,
            a,
            c,
            u,
            f,
            g,
            w,
            R,
            T,
            B,
            U,
            Q,
            V,
            te,
            $,
            Z,
            ie,
            ye,
            S,
            z,
            he,
            de
          ) {
            (this.timeService = e),
              (this.store = n),
              (this.data = o),
              (this.userStats = a),
              (this.rb = c),
              (this.gameApi = u),
              (this.offlineGamesService = f),
              (this.familyService = g),
              (this.baselineService = w),
              (this.audioService = R),
              (this.gameMakerService = T),
              (this.appInfo = B),
              (this.a11yService = U),
              (this.storage = Q),
              (this.launchReview = V),
              (this.liteApi = te),
              (this.speechService = $),
              (this.mobileService = Z),
              (this.gigApi = ie),
              (this.play2Store = ye),
              (this.play2Service = S),
              (this.userApi = z),
              (this.mtcService = he),
              (this.translateService = de),
              (this.databaseStagesPrefix = "g"),
              (this.questionLengthMultiplier = 4),
              (this.gameSaved$ = new A.xQ()),
              (this.wonFestiveGame$ = new M.X(null)),
              (this.MAX_DIALOG_WAIT_TIME = 7e3),
              (this.defaultIncorrectAnswerDelayMs = 750),
              this.extractYearMonthDayDate(),
              this.savePendingGamesListener(),
              this.audioService.audioEnded$.subscribe((Ge) => {
                this.store.settings.enableMusic &&
                  this.remainingTime > 5 &&
                  this.enqueueMusic();
              }),
              ("desktopSafari" === this.mobileService.detailedPlatform ||
                "macOSWeb" === this.mobileService.detailedPlatform) &&
                (this.defaultIncorrectAnswerDelayMs = 1250);
          }
          initOfflinePendingSaves() {
            this.store.pendingGameSaves$ ||
              (this.savePendingGamesListener(),
              this.store.isFamily && this.familyService.savePendingSettings());
          }
          savePendingGamesListener() {
            this.store.pendingGameSaves$ = this.store.savePendingGames$
              .pipe(
                (0, We.g)(2e3),
                (0, oe.h)((e) => {
                  var n;
                  return (
                    !!e &&
                    e.length &&
                    !this.store.savingPendingGames &&
                    !(null === (n = this.store.user) || void 0 === n || !n.id)
                  );
                }),
                (0, k.b)((e) => {
                  this.store.savingPendingGames = !0;
                }),
                (0, xe.zg)((e) =>
                  (0, Se.z)(
                    ...e.map((n) =>
                      this.savePendingGameToServer(n, this.store.user.id).pipe(
                        (0, N.U)(() =>
                          this.gameMakerService.matchGameId(n.gameName[0])
                        ),
                        (0, k.b)((o) => {
                          (this.store.userSessions =
                            this.userStats.updateSessions(
                              o.slug,
                              n.gameLength,
                              this.store.userSessions
                            )),
                            this.store.userSessions$.next(
                              this.store.userSessions
                            ),
                            this.play2Service.setupPlayConfig(
                              this.store.userSessions
                            ),
                            ("baseline" === o.slug || "gig" === o.slug) &&
                              this.baselineService.pendingBaselineSaved$.next(
                                null
                              );
                        })
                      )
                    )
                  )
                ),
                (0, xe.zg)((e) =>
                  this.userStats.updateStatsFromOldSettingsApi(
                    this.store.user.id
                  )
                ),
                (0, be.x)(() => (this.store.savingPendingGames = !1))
              )
              .subscribe();
          }
          extractYearMonthDayDate() {
            const [e, n, o] = this.timeService.getYearMonthDaySeparately(
              L().toDate()
            );
            (this.yearmonth = e + "" + n), (this.day = o);
          }
          generateGameStages() {
            return [
              { stage: "countdown", length: 5 },
              { stage: "game", length: 60 },
              { stage: "preEnd", length: 5 },
              { stage: "end" },
              { stage: "pause" },
              { stage: "reckless" },
              { stage: "cheat" },
            ];
          }
          setupSoundcheck(e) {
            var n, o, a, c;
            const u = this.generateGameStages(),
              f = new M.X(u[0]),
              g = new M.X(null),
              w = new M.X(null),
              R = new M.X(0),
              T = new M.X(!1);
            (this.speechService.micClicked$ = new A.xQ()),
              (this.speechService.speakerClicked$ = new A.xQ());
            const B = new M.X(null),
              U = new ge.t(),
              Q = new M.X(!1),
              V = new A.xQ();
            let te = 0;
            const $ = this.generateSoundCheckQuestions();
            let ie,
              Z = $[te];
            (Z.status = "pending"),
              (Z.timestamp = this.timeService.timestamp()),
              (te = 1);
            const ye = new M.X($),
              S = [];
            let z = e.correct || 0,
              he = e.wrong || 0,
              de = 0,
              Ge = e.length;
            const q = B.pipe(
                (0, oe.h)((G) => !!G || 0 === G),
                (0, N.U)((G) => this.processAnswer(Z, G, Ge, ie, e)),
                (0, k.b)((G) => {
                  G.correct || this.playWrongAnswerSound();
                }),
                (0, ue.w)((G) =>
                  this.addIncorrectDelay(
                    this.store.isStudent ? e.wrongAnswerDelay : 0,
                    G,
                    U
                  )
                ),
                (0, N.U)(
                  (G) => (
                    G.answerDelay > 59e3 && (G.answerDelay = 59e3),
                    S.push(G),
                    G.correct
                      ? ((this.store.settings.enableSoundEffects ||
                          this.speechService.speakerTurnedOn) &&
                          this.audioService.playAnswerSound(),
                        z++,
                        (de = e.coins * z))
                      : he++,
                    {
                      correct: z,
                      wrong: he,
                      coins: de,
                      questionCount: te,
                      timeRemaining: Ge,
                      complete: !1,
                      history: S,
                    }
                  )
                ),
                (0, k.b)(() => {
                  setTimeout(() => {
                    R.next(R.value + 1);
                  }, 10);
                }),
                (0, _.B)()
              ),
              P = q.pipe(
                (0, N.U)(() => $[te++]),
                (0, k.b)((G) =>
                  G
                    ? ((ie = Z),
                      (Z = G),
                      (G.timestamp = this.timeService.timestamp()),
                      ye.next($))
                    : this.gotoNextStage(f, u)
                ),
                (0, oe.h)((G) => !!G),
                (0, _.B)(),
                (0, ve.O)(Z)
              ),
              le = w.pipe(
                (0, oe.h)((G) => !!G),
                (0, k.b)((G) => {
                  (Z.downtime = G.questionDelayMs), (Z.answerType = G.type);
                }),
                (0, _.B)()
              ),
              Re = f.pipe(
                (0, ue.w)((G) =>
                  "countdown" === G.stage
                    ? (this.store.settings.enableSoundEffects &&
                        this.audioService.loadCountdownAudio(),
                      this.countdownTimer(
                        e.manualNextQuestion ? 0 : G.length,
                        e.secondsLengthMs,
                        !!this.store.settings.enableSoundEffects,
                        !1
                      ))
                    : "game" === G.stage
                    ? (this.speechService.log.setGameStartTime(),
                      setTimeout(() => {
                        this.turnOnSpeechFeatures();
                      }, 200),
                      B.pipe(
                        (0, ue.w)(() =>
                          e.manualNextQuestion
                            ? this.delayInbetweenQuestions(
                                te,
                                B,
                                e.questionDelay,
                                void 0,
                                V,
                                !1,
                                e.length,
                                !0,
                                Q,
                                T
                              )
                            : e.questionDelay
                            ? this.delayInbetweenQuestions(
                                te,
                                B,
                                e.questionDelay,
                                void 0,
                                V,
                                !1,
                                e.length,
                                !0,
                                null,
                                T
                              )
                            : this.questionCountdown(
                                te,
                                B,
                                void 0,
                                void 0,
                                void 0,
                                V,
                                !1,
                                T
                              )
                        ),
                        (0, _.B)()
                      ))
                    : "preEnd" === G.stage
                    ? (this.speechService.log.setGameEndTime(),
                      R.next(R.value + 1),
                      this.countdownTimer(5, 1e3, null, !1))
                    : ("end" === G.stage &&
                        (this.detectChanges(e),
                        this.endGame(S, e, {
                          correct: z,
                          wrong: he,
                          coins: de,
                        })),
                      (0, x.c)())
                ),
                (0, k.b)((G) => {
                  if (((Ge = G), G <= 0)) return this.gotoNextStage(f, u);
                }),
                (0, _.B)()
              ),
              Te = (0, ee.aj)([
                f,
                this.speechService.speakerClicked$.pipe(
                  (0, ve.O)(
                    !(
                      null ===
                        (o =
                          null === (n = this.store) || void 0 === n
                            ? void 0
                            : n.settings) ||
                      void 0 === o ||
                      !o.enableQuestionReader
                    )
                  )
                ),
                this.speechService.micClicked$.pipe(
                  (0, ve.O)(
                    !(
                      null ===
                        (c =
                          null === (a = this.store) || void 0 === a
                            ? void 0
                            : a.settings) ||
                      void 0 === c ||
                      !c.enableTextToSpeech
                    ) && this.speechService.voiceInputIsSupported
                  )
                ),
                this.a11yService.enableMusic$.pipe(
                  (0, ve.O)(this.store.settings.enableMusic)
                ),
              ]).pipe(
                (0, xe.zg)(
                  ([G, y, fe, r]) => (
                    (this.store.settings.enableSoundEffects || y) &&
                      this.loadAudio(),
                    this.store.settings.enableSoundEffects &&
                      (this.audioService.loadResultsAudioFile(),
                      "end" === G.stage &&
                        this.audioService.playSound("countScore")),
                    r
                      ? ("game" === G.stage &&
                          (y || fe ? this.stopMusic(!0) : this.loopMusic(!0)),
                        "end" === G.stage &&
                          !y &&
                          !fe &&
                          this.audioService.fadeOutMusic())
                      : this.stopMusic(!0),
                    (0, x.c)()
                  )
                ),
                (0, _.B)()
              );
            return (
              e.gameStartTimestamp &&
                this.checkTimestamp(e.gameStartTimestamp, e.length, f, u),
              {
                stages: u,
                stage$: f,
                refresh$: R,
                music$: Te,
                submittedAnswer$: B,
                showCorrectAnswer$: U,
                updateAnswerDetails$: le,
                delayCountdownMs$: g,
                pauseTimer$: T,
                answerDetails$: w,
                currentQuestion$: P,
                countdown$: Re,
                results$: q,
                questions$: ye,
                questionEmpty$: V,
                advanceQuestion$: Q,
              }
            );
          }
          setupJammin(e) {
            const n = this.generateGameStages(),
              o = new M.X(n[0]),
              a = new M.X(null),
              c = new M.X(null),
              u = new M.X(0);
            (this.speechService.micClicked$ = new A.xQ()),
              (this.speechService.speakerClicked$ = new A.xQ());
            const f = new M.X(null),
              g = new ge.t(),
              w = new A.xQ(),
              R = e.questionCount;
            let T = 0;
            e.levels = [
              {
                direction: "backward",
                divisionRatio: +e.divisionRatio,
                multiplicationRatio: +e.multiplicationRatio,
                leftTables: e.leftTables,
                rightTables: e.rightTables,
                questionCount: R,
                internalRatio: 0,
              },
            ];
            let U = this.generateBaselineQuestions(e, !0, e.questionCount),
              Q = 0;
            for (; U.length < e.questionCount && Q < 10; ) {
              Q += 1;
              const le = this.generateBaselineQuestions(
                e,
                !0,
                e.questionCount - U.length
              );
              U = U.concat(le);
            }
            let te,
              V = U[T];
            (V.status = "pending"),
              (V.timestamp = this.timeService.timestamp()),
              (T = 1);
            const $ = new M.X(U),
              Z = [];
            let ie = e.correct || 0,
              ye = e.wrong || 0,
              S = 0,
              z = e.length;
            const he = f.pipe(
                (0, oe.h)((P) => !!P || 0 === P),
                (0, N.U)((P) => this.processAnswer(V, P, z, te, e)),
                (0, k.b)((P) => {
                  P.correct || this.playWrongAnswerSound();
                }),
                (0, ue.w)((P) =>
                  this.addIncorrectDelay(e.wrongAnswerDelay, P, g)
                ),
                (0, N.U)(
                  (P) => (
                    P.answerDelay > 59e3 && (P.answerDelay = 59e3),
                    Z.push(P),
                    P.correct
                      ? ((this.store.settings.enableSoundEffects ||
                          this.speechService.speakerTurnedOn) &&
                          this.audioService.playAnswerSound(),
                        ie++,
                        (S = e.coins * ie))
                      : ye++,
                    {
                      correct: ie,
                      wrong: ye,
                      coins: S,
                      questionCount: T,
                      timeRemaining: z,
                      complete: !1,
                      history: Z,
                    }
                  )
                ),
                (0, k.b)(() => {
                  setTimeout(() => {
                    u.next(u.value + 1);
                  }, 10);
                }),
                (0, _.B)()
              ),
              de = he.pipe(
                (0, N.U)(() => U[T++]),
                (0, k.b)((P) =>
                  P
                    ? ((te = V),
                      (V = P),
                      (P.timestamp = this.timeService.timestamp()),
                      u.next(u.value + 1),
                      $.next(U))
                    : this.gotoNextStage(o, n)
                ),
                (0, oe.h)((P) => !!P),
                (0, _.B)(),
                (0, ve.O)(V)
              ),
              Ge = c.pipe(
                (0, oe.h)((P) => !!P),
                (0, k.b)((P) => {
                  (V.downtime = P.questionDelayMs), (V.answerType = P.type);
                }),
                (0, _.B)()
              ),
              q = o.pipe(
                (0, ue.w)((P) =>
                  "countdown" === P.stage
                    ? this.countdownTimer(0, e.secondsLengthMs, null, !1)
                    : "game" === P.stage
                    ? (setTimeout(() => {
                        this.turnOnSpeechFeatures();
                      }, 200),
                      f.pipe(
                        (0, ue.w)(() =>
                          this.delayInbetweenQuestions(
                            T,
                            f,
                            0,
                            R,
                            w,
                            !1,
                            999999,
                            !1
                          )
                        ),
                        (0, _.B)()
                      ))
                    : "preEnd" === P.stage
                    ? this.countdownTimer(0, 1e3, null, !1)
                    : ("end" === P.stage &&
                        this.endGame(Z, e, {
                          correct: ie,
                          wrong: ye,
                          coins: S,
                        }),
                      (0, x.c)())
                ),
                (0, k.b)((P) => {
                  if (((z = P), P <= 0)) return this.gotoNextStage(o, n);
                }),
                (0, _.B)()
              );
            e.gameStartTimestamp &&
              this.checkTimestamp(e.gameStartTimestamp, e.length, o, n);
            const ke = (0, ee.aj)([
              o,
              this.speechService.speakerClicked$.pipe((0, ve.O)(!1)),
              this.speechService.micClicked$.pipe((0, ve.O)(!1)),
              this.a11yService.enableMusic$.pipe(
                (0, ve.O)(this.store.settings.enableMusic)
              ),
            ]).pipe(
              (0, xe.zg)(
                ([P, le, Re, Te]) => (
                  (this.store.settings.enableSoundEffects || le) &&
                    this.loadAudio(),
                  this.store.settings.enableSoundEffects &&
                    (this.audioService.loadResultsAudioFile(),
                    "end" === P.stage &&
                      this.audioService.playSound("countScore")),
                  Te
                    ? ("game" === P.stage &&
                        (le || Re ? this.stopMusic(!0) : this.loopMusic(!0)),
                      "end" === P.stage &&
                        !le &&
                        !Re &&
                        this.audioService.fadeOutMusic())
                    : this.stopMusic(!0),
                  (0, x.c)()
                )
              ),
              (0, _.B)()
            );
            return {
              stages: n,
              stage$: o,
              refresh$: u,
              submittedAnswer$: f,
              showCorrectAnswer$: g,
              updateAnswerDetails$: Ge,
              delayCountdownMs$: a,
              answerDetails$: c,
              currentQuestion$: de,
              countdown$: q,
              results$: he,
              questions$: $,
              questionEmpty$: w,
              music$: ke,
            };
          }
          questionCountdown(
            e,
            n,
            o = 25,
            a = 6,
            c = 0,
            u,
            f = !0,
            g = new M.X(!1)
          ) {
            return this.countdownTimer(a, 1e3, null, f, g).pipe(
              (0, We.g)((1 === e && null === n.value) || e === o + 1 ? 0 : c),
              (0, ue.w)((w) => {
                if (w <= 0) {
                  if (e < o)
                    return (
                      u.next(!0),
                      this.questionCountdown(
                        e + 1,
                        n,
                        void 0,
                        void 0,
                        c,
                        u,
                        f,
                        g
                      )
                    );
                  if (e === o)
                    return u.next(!0), this.countdownTimer(5, 1e3, null, f, g);
                }
                return (0, I.of)(w);
              }),
              (0, _.B)()
            );
          }
          setupGame(e, n) {
            const o = this.generateGameStages(),
              a = new M.X(o[0]);
            let c,
              u,
              f,
              g,
              w = !1;
            const R = new M.X(!0);
            (this.speechService.micClicked$ = new A.xQ()),
              (this.speechService.speakerClicked$ = new A.xQ());
            const T = new M.X(null),
              B = new M.X(null),
              U = new M.X(null),
              Q = new M.X(!1),
              V = new ge.t(),
              te = new A.xQ();
            (this.speechService.voiceAnswers = []),
              (this.speechService.log = new Ee.q()),
              (this.speechService.log.gameCreatedAt = e.timestamp);
            let $ =
              e.resumeHistory && e.resumeHistory.length < 100 && "b" === e.id
                ? e.resumeHistory.length
                : 0;
            const Z = "b" === e.id && !$;
            e.hasOwnProperty("multiplicationRatio") ||
            e.hasOwnProperty("divisionRatio") ||
            "b" === e.id
              ? ((w = !0),
                (c =
                  "b" === e.id
                    ? e.resumeQuestions && e.resumeQuestions.length && !Z
                      ? e.resumeQuestions
                      : this.generateBaselineQuestions(e, !1, e.questionCount)
                    : this.generatePreQuestions(e)),
                e.shuffleQuestions && this.shuffleQuestions(c),
                (g = c[$ - 1]),
                (u = c[$]),
                (f = c[++$]))
              : ((g = u),
                (u = this.generateNewQuestion(e, $++)),
                (f = this.generateNewQuestion(e, $++)));
            const ie = e.resumeHistory || [],
              ye = [];
            let S = e.correct || 0,
              z = e.wrong || 0,
              he = e.resumeCoins || 0,
              de = e.resumeSpeed || null;
            const Ge = [];
            let q = e.resumeTime || e.length;
            const ke = T.pipe(
                (0, oe.h)((y) => !!y),
                (0, N.U)((y) => this.processAnswer(u, y, q, g, e)),
                (0, k.b)((y) => {
                  y.correct || this.playWrongAnswerSound();
                }),
                (0, ue.w)((y) =>
                  this.addIncorrectDelay(e.wrongAnswerDelay, y, V)
                ),
                (0, N.U)(
                  (y) => (
                    y.timeAnswered < e.length &&
                      (ie.push(y),
                      y.correct
                        ? (
                          S++,
                          (he = e.coins * S),
                          (de = Math.round((e.length / S) * 100) / 100),
                          (this.store.settings.enableSoundEffects ||
                            this.speechService.speakerTurnedOn) &&
                            this.audioService.playAnswerSound())
                        : (this.recklessCounter(y, ye, a, o),
                          z++,
                          (de = S
                            ? Math.round((e.length / S) * 100) / 100
                            : "-"))),
                    {
                      correct: S,
                      wrong: z,
                      timeRemaining: q,
                      speed: de,
                      coins: he,
                      recklessAnswers: ye,
                      name: this.store.user ? this.store.user.rockname : "",
                      image: this.store.user ? this.store.user.image : "",
                      id: this.store.user ? this.store.user.id : 0,
                      questionCount: $,
                      complete: !1,
                      history: ie,
                    }
                  )
                ),
                (0, ue.w)((y) =>
                  this.liveUpdate(e.firebaseLiveUpdate, e.firebaseUrl, y, n)
                ),
                (0, k.b)((y) => {
                  c && $ === c.length && this.gotoNextStage(a, o),
                    "b" === e.id &&
                      (this.baselineService.storeBaselineQuestions(
                        { questions: c, currentQuestion: u },
                        this.store.user.id
                      ),
                      this.baselineService.storeResultsAndHistory(
                        y,
                        ie,
                        this.store.user.id
                      ));
                }),
                (0, ve.O)({
                  correct: S,
                  wrong: z,
                  timeRemaining: q,
                  speed: de,
                  coins: he,
                  skip: !0,
                }),
                (0, ze.d)(1)
              ),
              P = B.pipe(
                (0, oe.h)((y) => !!y),
                (0, k.b)((y) => {
                  (u.downtime = y.questionDelayMs), (u.answerType = y.type);
                }),
                (0, _.B)()
              ),
              le = ke.pipe(
                (0, oe.h)((y) => !y.skip),
                (0, k.b)(() => (g = u)),
                (0, N.U)(() => f),
                (0, k.b)((y) => (u = y)),
                (0, k.b)(() => (u.timestamp = this.timeService.timestamp())),
                (0, _.B)(),
                (0, ve.O)(u)
              ),
              Re = le.pipe(
                (0, Je.T)(1),
                (0, N.U)(() =>
                  w
                    ? c[$ === c.length - 1 ? $++ : ++$]
                    : this.generateNewQuestion(e, $++)
                ),
                (0, k.b)((y) => (f = y)),
                (0, k.b)(() => {
                  u.timestamp = this.timeService.timestamp();
                }),
                (0, _.B)(),
                (0, ve.O)(f)
              ),
              Te = a.pipe(
                (0, ue.w)((y) => {
                  if ("countdown" === y.stage && e.gameStartTimestamp)
                    return R.pipe(
                      (0, ue.w)((fe) =>
                        fe
                          ? this.timeService
                              .countdownUntilTime(e.gameStartTimestamp)
                              .pipe(
                                (0, N.U)((r) => -r),
                                (0, _.B)()
                              )
                          : $e
                      ),
                      (0, _.B)()
                    );
                  if ("game" === y.stage && e.gameStartTimestamp) {
                    const r =
                      e.gameStartTimestamp + 1e3 * (e.length || y.length);
                    return (
                      (u.timestamp = this.timeService.timestamp()),
                      this.timeService
                        .countdownUntilTime(r, !1)
                        .pipe((0, N.U)((s) => -s))
                    );
                  }
                  if ("countdown" === y.stage) {
                    let fe = !1;
                    return (
                      (this.store.settings.enableSoundEffects || e.spectate) &&
                        (this.audioService.loadCountdownAudio(), (fe = !0)),
                      this.countdownTimer(y.length, e.secondsLengthMs, fe)
                    );
                  }
                  if (
                    ("preEnd" === y.stage &&
                      !e.spectate &&
                      (this.speechService.log.setGameEndTime(),
                      this.liveUpdate(
                        e.firebaseLiveUpdate,
                        e.firebaseUrl,
                        {
                          correct: S,
                          wrong: z,
                          complete: !0,
                          timeRemaining: 0,
                        },
                        n
                      )),
                    y.length || "game" === y.stage)
                  ) {
                    const fe =
                      ("game" === y.stage && (e.resumeTime || e.length)) ||
                      y.length;
                    return (
                      (u.timestamp = this.timeService.timestamp()),
                      this.turnOnSpeechFeatures(),
                      this.speechService.log.setGameStartTime(),
                      this.countdownTimer(
                        fe,
                        e.secondsLengthMs,
                        !1,
                        !0,
                        Q
                      ).pipe(
                        (0, k.b)((r) => {
                          "b" === e.id &&
                            this.baselineService.storeTimeRemaining(
                              r,
                              this.store.user.id
                            );
                        })
                      )
                    );
                  }
                  return (
                    "end" === y.stage &&
                      (e.spectate ||
                        this.endGame(
                          ie,
                          e,
                          { correct: S, wrong: z, coins: he },
                          te
                        )),
                    "reckless" === y.stage &&
                      ((e.fines = !0),
                      this.endGame(ie, e, { correct: S, wrong: z, coins: he })),
                    "pause" === y.stage ? $e : (0, x.c)()
                  );
                }),
                (0, k.b)((y) => {
                  if (((q = y), y <= 0)) return this.gotoNextStage(a, o);
                }),
                (0, _.B)()
              ),
              G = (0, ee.aj)([
                a,
                this.speechService.speakerClicked$.pipe((0, ve.O)(!1)),
                this.speechService.micClicked$.pipe((0, ve.O)(!1)),
                this.a11yService.enableMusic$.pipe(
                  (0, ve.O)(this.store.settings.enableMusic)
                ),
              ]).pipe(
                (0, xe.zg)(
                  ([y, fe, r, s]) => (
                    (this.store.settings.enableSoundEffects || e.spectate) &&
                      ("countdown" === y.stage &&
                        (this.loadAudio(),
                        this.audioService.loadResultsAudioFile()),
                      "preEnd" === y.stage &&
                        (e.spectate
                          ? setTimeout(() => {
                              this.stopMusic(!0).subscribe(() => {
                                this.audioService.playSound("countScore");
                              });
                            }, 1e3)
                          : this.stopMusic(!0).subscribe(() => {
                              this.speechService.speakerTurnedOn &&
                                "preEnd" === y.stage &&
                                this.audioService.fadeOutResultSound(6e3);
                            })),
                      "end" === y.stage &&
                        (this.speechService.speakerTurnedOn ||
                          this.stopMusic(!0).subscribe(() => {
                            this.audioService.playSound("countScore");
                          }))),
                    !this.store.settings.enableSoundEffects &&
                      fe &&
                      this.loadAudio(),
                    s || e.spectate
                      ? ("countdown" === y.stage &&
                          this.loadMusic(e.length).toPromise(),
                        "game" === y.stage &&
                          (fe || r ? this.stopMusic(!0) : this.playMusic(!0)),
                        "end" === y.stage &&
                          (this.stopMusic(!0),
                          this.speechService.speakerTurnedOn &&
                            this.audioService.stop(
                              this.audioService.resultAudioFile
                            )))
                      : s || this.stopMusic(!0),
                    (0, x.c)()
                  )
                ),
                (0, _.B)()
              );
            return (
              e.gameStartTimestamp &&
                this.checkTimestamp(e.gameStartTimestamp, e.length, a, o),
              this.speechService.log.logTimer(Te),
              {
                stages: o,
                stage$: a,
                submittedAnswer$: T,
                answerDetails$: B,
                pauseTimer$: Q,
                updateAnswerDetails$: P,
                delayCountdownMs$: U,
                showCorrectAnswer$: V,
                currentQuestion$: le,
                nextQuestion$: Re,
                countdown$: Te,
                results$: ke,
                music$: G,
                rockslamResults$: te,
              }
            );
          }
          generateDebugQuestions(e) {
            let o,
              a,
              c,
              n = e.maxTable || this.getMaxTable(e.tables);
            e.tables && e.tables.length
              ? ((o = e.tables),
                (c =
                  this.store.isFamily || this.store.isTutor
                    ? Math.max(...o) > 12
                    : Math.max(...o) > 12 && Math.max(...o) < 20),
                c && (n = Math.max(...o)),
                (a = this.generateDefaultTables(n, 2)))
              : (o = this.generateDefaultTables(n, 2)),
              a ||
                (a =
                  e.rightTables && e.rightTables.length
                    ? e.rightTables
                    : this.generateDefaultTables(n, 2).reverse());
            const u = [],
              f = Array(13)
                .fill(0)
                .map(() => Array(13).fill(0));
            for (let g = 0; g < 1e4; g++) {
              const w = this.generateNewQuestion(e, g);
              u.push(w),
                "*" === w.operator &&
                  (f[w.left][w.right] = f[w.left][w.right] + 1);
            }
          }
          turnOnSpeechFeatures() {
            var e, n;
            (null === (e = this.store.settings) || void 0 === e
              ? void 0
              : e.enableQuestionReader) &&
              !this.speechService.speakerTurnedOn &&
              this.speechService.toggleQuestionReader(),
              (null === (n = this.store.settings) || void 0 === n
                ? void 0
                : n.enableTextToSpeech) &&
                !this.speechService.recordingEnabled &&
                this.speechService.voiceInputIsSupported &&
                this.speechService.toggleTextToSpeech();
          }
          checkTimestamp(e, n, o, a) {
            const c = this.timeService.timestampDifference(e) / 1e3;
            return o.next(
              a.find(
                c < 0
                  ? (u) => "countdown" === u.stage
                  : c < n
                  ? (u) => "game" === u.stage
                  : (u) => "end" === u.stage
              )
            );
          }
          generateSoundCheckQuestions2(e = [6, 9, 8, 2]) {
            const n = e.map((a, c) => this.generateLevelListOptions(c + 1));
            this.shuffleQuestions(n[0]),
              this.shuffleQuestions(n[1]),
              this.shuffleQuestions(n[2]),
              this.shuffleQuestions(n[3]);
            const o = [].concat.apply(
              [],
              e.map((a, c) => this.drawQuestionsFromList(n[c], a))
            );
            return this.shuffleQuestions(o), o;
          }
          generateSoundCheckQuestions() {
            const e = this.generateSoundcheckQuestionPool();
            console.log(e, "questionPool");
            const n = this.randomlyPickQuestions(e);
            return (
              console.log(n, "gameQuestions"),
              this.countQuestionsPerTable(n),
              this.shuffleQuestions(n)
            );
          }
          countQuestionsPerTable(e) {
            const n = {
              2: 0,
              3: 0,
              4: 0,
              5: 0,
              6: 0,
              7: 0,
              8: 0,
              9: 0,
              10: 0,
              11: 0,
              12: 0,
            };
            e.forEach((a) => (n[a.left] ? n[a.left]++ : (n[a.left] = 1))),
              (n.total = Object.keys(n).reduce((a, c) => a + n[c], 0));
            const o = {};
            Y.Pb.map((a) => {
              o[
                `${a.table}s - count: ${+n[a.table]}  min: ${
                  a.minCount
                }, max: ${a.maxCount}`
              ] = +n[a.table] <= a.maxCount && a.minCount <= +n[a.table];
            }),
              (o.total = n.total),
              console.log(o, "Table count check passed...");
          }
          randomlyPickQuestions(e) {
            let o = [];
            const a = Y.Pb.filter((c) => c.minCount > 0);
            for (let c = 0; c < a.length; c++) {
              const u = e.filter((g) => g.left === a[c].table),
                f = this.drawQuestionsFromList(u, a[c].minCount);
              o = o.concat(f);
            }
            e = e.filter(
              (c) => !o.find((u) => u.left === c.left && u.right === c.right)
            );
            for (let c = o.length; c < 25; c++) {
              const u = Math.random() * (e.length - 1),
                f = Math.round(u),
                g = e[f];
              o.push(g), e.splice(f, 1);
              const w = Y.Pb.find((T) => T.table === g.left);
              o.filter((T) => T.left === w.table).length >= w.maxCount &&
                (e = e.filter((T) => T.left !== w.table));
            }
            return o;
          }
          generateSoundcheckQuestionPool() {
            const e = [];
            for (let o = 2; o <= 12; o++)
              for (let a = 2; a <= 12; a++)
                e.push({
                  left: o,
                  right: a,
                  answer: o * a,
                  operator: "*",
                  status: "pending",
                });
            return this.reduceQuestionPoolByMaxTableCount(e);
          }
          reduceQuestionPoolByMaxTableCount(e) {
            let n = [];
            for (let o = 0; o < Y.Pb.length; o++) {
              const a = e.filter((u) => u.left === Y.Pb[o].table),
                c = this.drawQuestionsFromList(a, Y.Pb[o].maxCount);
              n = n.concat(c);
            }
            return n;
          }
          generateBaselineQuestions(e, n, o) {
            const a = e.levels.map((c) => {
              const u = this.generateQuestionPool(
                  c.leftTables,
                  c.rightTables,
                  "*"
                ),
                f = this.generateQuestionPool(
                  c.leftTables,
                  c.rightTables,
                  "/",
                  n
                );
              return this.pickQuestionsFromPool(
                c,
                [u, f],
                o || c.questionCount
              ).map((w) => {
                const [R, T, B, U] = this.createQuestionStructure(
                    w.left,
                    w.right,
                    w.operator,
                    null,
                    c.direction,
                    c.internalRatio
                  ),
                  Q = this.timeService.timestamp();
                return {
                  left: R,
                  right: T,
                  operator: w.operator,
                  answer: B,
                  timestamp: Q,
                  status: "pending",
                  internal: U,
                };
              });
            });
            return [].concat.apply([], a);
          }
          pickQuestionsFromPool(e, n, o) {
            return this.questionTypes(e.multiplicationRatio, e.divisionRatio, o)
              .map((c) => this.grabQuestionFromPool(c, n))
              .filter((c) => !!c);
          }
          filterSettingsQuestions(e, n) {
            const [o, a] = n;
            return [
              o.filter(
                (f) =>
                  !!e.leftTables.find((g) => g === f.left) &&
                  !!e.rightTables.find((g) => g === f.right)
              ),
              a.filter(
                (f) =>
                  !!e.leftTables.find((g) => g === f.left) &&
                  !!e.rightTables.find((g) => g === f.right)
              ),
            ];
          }
          grabQuestionFromPool(e, n) {
            const [o, a] = n;
            return ("*" === e ? o : a).splice(0, 1)[0];
          }
          generateQuestionPool(e, n, o, a = !1) {
            const c = [];
            for (let u = 0; u < e.length; u++)
              for (let f = 0; f < n.length; f++)
                c.push({
                  left: "*" === o || a ? e[u] : e[u] * n[f],
                  right: n[f],
                  answer: "*" === o || a ? e[u] * e[f] : (e[u] * n[f]) / n[f],
                  operator: o,
                  status: "pending",
                });
            return this.shuffle(c), c;
          }
          generateQuestionsFromOperator(e, n, o) {
            const a = [];
            for (let c = 0; c < e.length; c++)
              for (let u = 0; u < n.length; u++)
                a.push({
                  left: "*" === o ? e[c] : e[c] * n[u],
                  right: n[u],
                  answer: "*" === o ? e[c] * e[u] : (e[c] * n[u]) / n,
                  operator: o,
                  status: "pending",
                });
            return a;
          }
          drawQuestionsFromList(e, n) {
            const o = [],
              a = [];
            for (let c = 0; c < n; c++) {
              const u = Math.random() * (e.length - 1),
                f = Math.round(u);
              a.push(f), o.push(e.splice(f, 1)[0]);
            }
            return o;
          }
          generateLevelListOptions(e) {
            const n = this.getTablesByDifficulty(e),
              o = this.getTablesByDifficulty(e, !0),
              a = [];
            for (let c = 0; c < n.length; c++)
              for (let u = c; u < o.length; u++)
                a.push({
                  left: n[c],
                  right: o[u],
                  answer: n[c] * o[u],
                  operator: "*",
                  status: "pending",
                }),
                  o[u] !== n[c] &&
                    a.push({
                      left: o[u],
                      right: n[c],
                      answer: n[c] * o[u],
                      operator: "*",
                      status: "pending",
                    });
            return a;
          }
          generateNewQuestion(e, n = 1, o = null) {
            let u,
              f,
              g,
              w,
              R,
              T,
              a = e.seed + n,
              c = e.maxTable || this.getMaxTable(e.tables);
            const B = !(
              e.weakestLeftTables &&
              e.weakestLeftTables.length &&
              e.weakestRightTables &&
              e.weakestRightTables.length
            );
            !B && this.weakQuestionsRange(e, n)
              ? ((u = e.weakestLeftTables), (f = e.weakestRightTables))
              : e.weakestFacts && e.weakestFacts.length
              ? (R = !0)
              : e.leftTables && e.leftTables.length
              ? (u = e.leftTables)
              : e.tables && e.tables.length
              ? ((u = e.tables),
                (w =
                  this.store.isFamily || this.store.isTutor
                    ? Math.max(...u) > 12
                    : Math.max(...u) > 12 && Math.max(...u) < 20),
                w && (c = Math.max(...u)),
                (f = this.generateDefaultTables(c, 2)))
              : (u = this.generateDefaultTables(c, 2)),
              f ||
                (f =
                  e.rightTables && e.rightTables.length
                    ? e.rightTables
                    : this.generateDefaultTables(c, 2));
            let Q,
              V,
              U = o || this.getRandomOperator(e.multiplication, e.division, a);
            if (R) {
              const z =
                e.weakestFacts[
                  Math.floor(this.random(a + Q) * e.weakestFacts.length)
                ];
              (U = z.operator),
                (Q = z.left),
                (V = z.right),
                (T = !0),
                (e.direction = "forward");
            } else
              (a *= 2),
                e.pairedIndexTables &&
                  this.weakQuestionsRange(e, n) &&
                  (g = Math.floor(this.random(a) * u.length)),
                (a *= 3),
                (Q =
                  u[
                    e.pairedIndexTables && this.weakQuestionsRange(e, n) && !B
                      ? g
                      : Math.floor(this.random(a) * u.length)
                  ]),
                (a *= 4),
                (V =
                  f[
                    e.pairedIndexTables && this.weakQuestionsRange(e, n) && !B
                      ? g
                      : Math.floor(this.random(a + Q) * f.length)
                  ]),
                (a *= 5);
            const [te, $, Z, ie, ye] = this.createQuestionStructure(
              Q,
              V,
              U,
              a,
              e.direction,
              e.internalRatio,
              T
            );
            return {
              left: te,
              right: $,
              operator: ye,
              answer: Z,
              timestamp: this.timeService.timestamp(),
              status: "pending",
              internal: ie,
            };
          }
          generateMaxPair(e, n, o, a, c, u, f) {
            return (
              c > 12 && c < 20 && (e = e.filter((g) => c >= g)),
              c > 19 && (e = e.filter((g) => 12 >= g)),
              e[
                n.pairedIndexTables && this.weakQuestionsRange(n, o) && !f
                  ? u
                  : Math.floor(this.random(a + c) * e.length)
              ]
            );
          }
          getTablesByDifficulty(e, n = !1) {
            const o = [2, 5, 10, 3, 4, 8, 6, 7, 9, 11, 12],
              a = o.slice(3 * (e - 1)),
              c = o.slice(3 * (e - 1), 3 * e);
            return n ? a : c;
          }
          getMaxTable(e) {
            if (e) {
              const n = Math.max(...e);
              return n > 12 && n < 20 ? 20 : 12;
            }
            return 12;
          }
          createQuestionStructure(e, n, o, a, c = "mix", u = 0, f = !1) {
            const g = f && "*" !== o ? e / n : Math.round(e * n * 100) / 100,
              w = [e, n];
            let T,
              B,
              U,
              R = o;
            if ("forward" === c) (T = e), (B = n), (U = 2);
            else if ("backward" === c)
              (T = n), (B = e), (U = "*" === o ? 1 : 2);
            else {
              const Q = Math.round(this.random(a + g));
              (T = w[Q]),
                (B = w[Math.abs(Q - 1)]),
                (U = Q && "*" !== o ? 2 : 1);
            }
            return "*" !== o && f
              ? [+T, +B, +g, 0, o]
              : u
              ? "*" === o
                ? ((R = "m"), [+T, +g, +B, U, R])
                : ((R = "d"), [+g, +T, +B, U, R])
              : "*" === o
              ? [+T, +B, +g, 0, o]
              : [+g, +B, +T, 0, o];
          }
          weakQuestionsRange(e, n) {
            return e.manualQuestionsLength
              ? e.manualQuestionsLength * e.weakRatio > n
              : e.length * this.questionLengthMultiplier * e.weakRatio > n;
          }
          getRandomOperator(e, n, o) {
            return e && !n
              ? "*"
              : !e && n
              ? "/"
              : this.random(o) > 0.25
              ? "*"
              : "/";
          }
          generateDefaultTables(e = 12, n = 2) {
            const o = [];
            for (let a = n; a < e + 1; a++) o.push(a);
            return o;
          }
          random(e = null) {
            if (e) {
              const n = 1e4 * Math.sin(e);
              return n - Math.floor(n);
            }
            return Math.random();
          }
          processAnswer(e, n, o, a, { length: c, wrongAnswerDelay: u }) {
            const f = e.answer === +n;
            (e.status = f ? "correct" : "wrong"), this.vibrate(f ? 50 : 300);
            const g = this.timeService.timestamp();
            let w = 0;
            return (
              a &&
                "wrong" === a.status &&
                "voice" === (null == a ? void 0 : a.answerType) &&
                (w = u || 0 === u ? u : this.defaultIncorrectAnswerDelayMs),
              isNaN(e.downtime) && (e.downtime = 0),
              {
                correct: f,
                answerDelay: g + w - e.timestamp - Number(e.downtime),
                timeAnswered: c - o,
                val: n,
                question: e,
              }
            );
          }
          gotoNextStage(e, n) {
            return e.next(this.nextStage(e, n));
          }
          nextStage(e, n) {
            const o = this.currentStageIndex(e, n);
            return o + 1 >= n.length ? n[0] : n[o + 1];
          }
          currentStageIndex(e, n) {
            const o = e.value;
            return n.findIndex((a) => a.stage === o.stage);
          }
          endBaseline(e, n) {
            const o = n.find((a) => "reckless" === a.stage);
            return e.next(o);
          }
          goToRecklessStage(e, n) {
            const o = n.find((a) => "reckless" === a.stage);
            return e.next(o);
          }
          goToCheatStage(e, n) {
            const o = n.find((a) => "cheat" === a.stage);
            return e.next(o);
          }
          countdownTimer(e, n = 1e3, o = !1, a = !0, c = new M.X(!1)) {
            return (0, nt.P)(() => {
              let u = 0;
              return (0, Fe.H)(0, n).pipe(
                (function ot(...J) {
                  return (ae) => {
                    let e;
                    return (
                      "function" == typeof J[J.length - 1] && (e = J.pop()),
                      ae.lift(new qe(J, e))
                    );
                  };
                })(c),
                (0, oe.h)(([f, g]) => !g),
                (0, N.U)(([f, g]) => u++),
                (0, k.b)(() => {
                  o && this.audioService.stopCountdownSound();
                }),
                (0, N.U)((f) => e - f),
                (0, k.b)((f) => {
                  a && (this.remainingTime = f),
                    o && f > 0 && this.audioService.playCountdownSound();
                }),
                (0, De.q)(e + 1)
              );
            }).pipe((0, _.B)());
          }
          countdownDeciTimer(e, n = 1e3) {
            return (0, Fe.H)(0, n / 10).pipe(
              (0, N.U)((a) => e - a / 10),
              (0, De.q)(10 * e + 1)
            );
          }
          addIncorrectDelay(e, n, o) {
            const a = e || 0 === e ? e : this.defaultIncorrectAnswerDelayMs;
            return !n.correct && a > 0
              ? (o.next(!0),
                (0, Fe.H)(a).pipe(
                  (0, k.b)(() => o.next(!1)),
                  (0, N.U)(() => n)
                ))
              : (0, I.of)(n);
          }
          setMultiplayerGameTime(e, n, o, a) {}
          timestampXsecondsInFuture(e) {
            return L().valueOf() + 1e3 * e;
          }
          simulateQuestionAnswer(e, n, o) {
            const a = e.seed;
            let c = 0;
            return o.pipe(
              (0, ue.w)((u) => {
                c++;
                const g = 100 * this.random(a + c) < e.accuracy ? u.answer : 1,
                  w =
                    e.speed +
                    (e.speed * (2 * this.random(a + c + 1e3) - 1)) / 20;
                return (0, He.F)(w * e.secondsLengthMs).pipe(
                  (0, k.b)(() => n.next(g))
                );
              })
            );
          }
          generateDualBot(e, n, o) {
            const a = new Y.QO();
            (a.id = 1), (a.name = o ? o.rockname : "Late Entrant");
            const c = n / e;
            return (
              (a.rockspeed = c && c !== 1 / 0 ? c : 99999),
              (a.accuracy = 100),
              (a.finalCorrect = e),
              (a.image = o.image),
              (0, I.of)([a])
                .pipe((0, _.B)())
                .pipe(
                  (0, xe.zg)((f) =>
                    (0, He.F)(1e3 * f[0].rockspeed).pipe(
                      (0, N.U)(() => (f[0].correct++, f)),
                      (0, De.q)(f[0].finalCorrect)
                    )
                  )
                )
            );
          }
          joinStage(e, n, o, a, c) {
            this.rb.join(e, this.getGameKey(e, n, a)).then();
          }
          leaveStage(e, n, o, a) {
            this.rb.leave(e, this.getGameKey(e, n, a)).then();
          }
          unsubscribeStage(e, n, o) {
            this.rb.unsubscribeList(e, this.getGameKey(e, n, o));
          }
          getStageUsers(e, n, o) {
            return {
              valueChanges: () => this.rb.list(e, this.getGameKey(e, n, o)),
            };
          }
          liveUpdate(e, n, o, a) {
            if (a) a(n, o);
            else if (e) {
              const c = n.split("/"),
                u = c[1],
                f = "f" === u ? 0 : 2,
                g = "f" === u ? 2 : 3,
                w = f ? parseInt(c[f], 10) : "",
                R = parseInt(c[g], 10);
              this.rb
                .update(u, w ? `${w}_${R}` : `${R}`, o.correct, o.wrong)
                .then();
            }
            return (0, I.of)(o);
          }
          loadAudio() {
            var e;
            return (
              (!(
                null === (e = this.audioService.correctAnswerAudioFile) ||
                void 0 === e
              ) &&
                e.src) ||
                (this.audioService.loadCorrectAnswerFile(),
                this.audioService.loadWrongAnswerFile(),
                this.audioService.loadMicrophoneReadyAudioFile()),
              (0, x.c)()
            );
          }
          loadMusic(e) {
            return (
              this.audioService.setGameLength(e),
              this.audioService.loadMusic(e),
              (0, x.c)()
            );
          }
          playMusic(e) {
            return this.audioService.playMusic(), (0, I.of)(e);
          }
          loopMusic(e) {
            return this.audioService.loopMusic(60), (0, I.of)(e);
          }
          stopMusic(e) {
            return (
              this.audioService.stop(this.audioService.musicFile), (0, I.of)(e)
            );
          }
          getGameKey(e, n, o) {
            return "f" === e
              ? `${n}`
              : o
              ? `${o.id}_${n}`
              : `s-${this.store.org.id}_${n}`;
          }
          endGame(e, n, o, a) {
            var c;
            if ((this.speechService.toggleSpeaker(!1), n.fines)) {
              const g = this.getLegacyGameData(e, n);
              return this.saveGameDataToServer(g, n).subscribe();
            }
            if (!n.fines && o.correct < 1 && "soundcheck" !== n.mode) return;
            this.readAnswerResults(o.correct, o.coins),
              this.updateFactsData(e, n);
            const u =
              null === (c = this.store.user) || void 0 === c
                ? void 0
                : c.average_time;
            this.userStats.updateStatsFromGame(e, n, o);
            const f = this.getLegacyGameData(e, n);
            n.isMtcGame && (this.store.mtcUserActive.progress += 50),
              n.skipServerSave
                ? o.correct > 0 && this.saveLiteData(e, n, o)
                : this.saveGameDataToServer(f, n)
                    .pipe((0, ue.w)(() => (0, Xe.D)(this.reviewAppStore(n, u))))
                    .subscribe(),
              "rockslam" === n.slug
                ? this.saveRockSlamData(e, n)
                    .pipe((0, k.b)((g) => (null == a ? void 0 : a.next(g))))
                    .subscribe()
                : "soundcheck" === n.slug || "mtc" === n.slug
                ? this.saveSoundcheckGameLocally(e, n)
                : "gig" === n.slug && this.updateLastPlayedGig(),
              this.saveVoiceRecognitionActivityLog(),
              this.saveVoiceAnswers(f);
          }
          readAnswerResults(e, n) {
            !this.speechService.speakerTurnedOn ||
              this.speechService.speak(
                `You correctly answered ${e} questions and earned ${n} coins.`,
                0.8
              );
          }
          updateLastPlayedGig() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const e = yield this.play2Store.userGigSettings;
              (e.enabled = !1),
                (e.force = !1),
                (e.last_played_at = +new Date() / 1e3),
                (this.play2Store.userGigSettings = e);
            });
          }
          saveVoiceRecognitionActivityLog() {}
          saveVoiceAnswers(e) {
            if (
              this.speechService.voiceAnswers &&
              this.speechService.voiceAnswers.length &&
              this.store.user.logSpeech
            ) {
              const n = e.game_name.split("-")[1];
              (this.speechService.voiceAnswers =
                this.speechService.voiceAnswers.filter(
                  (o) => o.a && o.a.length
                )),
                this.gameApi
                  .saveVoiceAnswers(
                    this.speechService.voiceAnswers,
                    n,
                    this.store.webAppPlatform
                  )
                  .subscribe();
            }
          }
          updateFactsData(e, n) {
            !n.weakestFacts ||
              !n.weakestFacts.length ||
              (e.forEach((o) => {
                const a = n.weakestFacts.find(
                  (c) =>
                    c.left === o.question.left &&
                    c.right === o.question.right &&
                    c.operator === o.question.operator
                );
                a && (a.answered || (a.answered = 0), a.answered++);
              }),
              (n.history = e));
          }
          reviewAppStore(e, n = null) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const o = e.slug;
              if (
                !this.store.isMobileBuild ||
                this.store.offline ||
                !this.launchReview.isRatingSupported() ||
                ("festival" !== o && "studio" !== o && "garage" !== o)
              )
                return;
              const { daysPlayed: a, atmPassed: c } = yield this.gameApi
                .appReviewStatus(o)
                .toPromise();
              if (!(a < 7))
                if ("festival" === o) {
                  const u = this.wonFestiveGame$
                    .pipe(
                      (0, oe.h)((f) => !!f),
                      (0, De.q)(1),
                      (0, k.b)(() => {
                        this.launchInAppReview();
                      })
                    )
                    .subscribe();
                  setTimeout(() => u.unsubscribe(), 5e3);
                } else
                  "studio" === o
                    ? !isNaN(+this.store.user.average_time) &&
                      !isNaN(+n) &&
                      0 != +n &&
                      this.userStats.rockStatus(n) !==
                        this.userStats.rockStatus(
                          +this.store.user.average_time
                        ) &&
                      this.store.user.average_time < n &&
                      this.launchInAppReview()
                    : "garage" === o && c && this.launchInAppReview();
            });
          }
          launchInAppReview() {
            const e = this.launchReview
              .rating()
              .pipe(
                (0, k.b)((n) => {
                  "requested" === n && this.saveUserAppReview();
                })
              )
              .subscribe();
            setTimeout(() => {
              e && e.unsubscribe && e.unsubscribe();
            }, this.MAX_DIALOG_WAIT_TIME);
          }
          saveUserAppReview() {
            let e = +this.store.settings.appReviewed;
            return (
              isNaN(e) && (e = 0),
              e++,
              (0, Xe.D)(this.userApi.saveSettings({ appReviewed: e }))
                .pipe((0, k.b)(() => (this.store.settings.appReviewed = e)))
                .toPromise()
            );
          }
          saveLiteData(e, n, o) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const a = yield this.storage.getItem("rocker");
              if (
                (a.stats ||
                  (a.stats = {
                    time: 0,
                    correct: 0,
                    wrong: 0,
                    maxScore: 0,
                    history: [],
                  }),
                (a.stats.correct += o.correct),
                (a.stats.wrong += o.wrong),
                (a.stats.time += n.length),
                o.correct > a.stats.maxScore && (a.stats.maxScore = o.correct),
                a.stats.history.push({
                  ts: n.timestamp,
                  tables: n.tables,
                  length: n.length,
                  correct: o.correct,
                  wrong: o.wrong,
                }),
                this.storage.setItem("rocker", a),
                n.liteLeaderboard)
              ) {
                const c = this.generateKey(n.liteLeaderboard);
                yield this.liteApi.saveScore(o, a, c, n.liteLeaderboard);
              }
            });
          }
          saveSoundcheckGameLocally(e, n) {
            const o = this.getSoundcheckData(e, n);
            (this.store.soundCheckGames = this.store.soundCheckGames.concat([
              o,
            ])),
              this.store.soundCheckHighscore < o.total_score &&
                (this.store.soundCheckHighscore = o.total_score);
          }
          saveGameDataToServer(e, n) {
            const o = n.userid,
              a = e.answers,
              c = e.game_name,
              u = e.game_length,
              f = e.fines,
              g = e.atmLevel,
              w = e.scGame,
              R = this.getClientInfo(c);
            "b" === c[0] && this.clearBaselineCopy();
            const T = this.generateKey(c);
            if (
              (this.familyService.isPracticeSessionGame(c) &&
                this.updatePracticeSessionsStore(u),
              this.store.pendingGameSaves && this.store.pendingGameSaves.length)
            ) {
              const B = this.gameApi.formGameData(a, c, u, f, R, T, g, !0, w);
              return (0, I.of)(
                this.savePendingGames(B, this.store.user.id)
              ).pipe();
            }
            return (
              (this.store.savingPendingGames = !0),
              navigator.webdriver
                ? (0, I.of)(null).pipe(
                    (0, be.x)(() => {
                      this.store.savingPendingGames = !1;
                    })
                  )
                : this.gameApi.submitAnswers(a, c, u, f, R, T, g, !1, w).pipe(
                    (0, k.b)(() => {
                      this.gameSaved$.next(!0),
                        "mtc" === n.slug && this.mtcService.showCurrentStage(),
                        this.familyService.isPracticeSessionGame(c) &&
                          this.familyService.savePracticeGoalResults2(),
                        (this.store.pendingGameSaves =
                          this.store.pendingGameSaves.filter((B) =>
                            "c" === c[0]
                              ? !B.scGame ||
                                e.scGame.when_ts !== B.scGame.when_ts
                              : B.gameName !== c
                          ));
                    }),
                    (0, be.x)(() => {
                      (this.store.savingPendingGames = !1),
                        this.offlineGamesService.storePendingGames(
                          this.store.pendingGameSaves,
                          o
                        );
                    })
                  )
            );
          }
          savePendingGames(e, n) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              return (
                yield this.offlineGamesService.addPendingGames(e, n),
                yield this.offlineGamesService
                  .savePendingGames(n, this.store)
                  .toPromise()
              );
            });
          }
          savePendingGameToServer(e, n) {
            let o, a;
            return (
              e.gameName &&
                ((o = this.getClientInfo(e.gameName)),
                (a = this.generateKey(e.gameName))),
              (this.store.savingPendingGames = !0),
              this.gameApi
                .submitAnswers(
                  e.answers,
                  e.gameName,
                  e.gameLength,
                  e.fines,
                  o,
                  a,
                  e.atmLevel,
                  !0,
                  e.scGame
                )
                .pipe(
                  (0, k.b)(() => {
                    this.familyService.isPracticeSessionGame(e.gameName) &&
                      this.savePracticeSessionsFromPendingGame(),
                      (this.store.pendingGameSaves =
                        this.store.pendingGameSaves.filter((c) =>
                          "c" === e.gameName[0]
                            ? !c.scGame || e.scGame.when_ts !== c.scGame.when_ts
                            : c.gameName !== e.gameName
                        ));
                  }),
                  (0, be.x)(() => {
                    (this.store.savingPendingGames = !1),
                      this.store.isLoggedIn &&
                        this.offlineGamesService.storePendingGames(
                          this.store.pendingGameSaves,
                          n
                        );
                  })
                )
            );
          }
          savePracticeSessionsFromPendingGame() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              (yield this.play2Store.goalResults)
                ? this.familyService.savePracticeGoalResults2()
                : this.familyService.practiceGoalResults$
                    .pipe(
                      (0, De.q)(1),
                      (0, k.b)(() => {
                        this.familyService.savePracticeGoalResults2();
                      })
                    )
                    .subscribe();
            });
          }
          generateKey(e) {
            const n = e.length > 9 ? 9 : e.length,
              o = Math.ceil(Math.random() * (n - 1)),
              a = e[o];
            return `${o}${a}${btoa(e + o + a)}`;
          }
          updatePracticeSessionsStore(e) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              let n = yield this.play2Store.goalResults;
              (!n || !n[this.yearmonth]) && (n = { [this.yearmonth]: {} }),
                (n[this.yearmonth][this.day] = n[this.yearmonth][this.day]
                  ? Math.ceil(n[this.yearmonth][this.day] + e / 60)
                  : Math.ceil(e / 60)),
                (this.play2Store.goalResults = n);
            });
          }
          saveRockSlamData(e, n) {
            const o = this.getRockslamGameData(e, n);
            return n.rockslamIds && n.rockslamIds.length
              ? this.updateRockslams(o, n)
              : this.newRockSlam(o, n);
          }
          updateRockslams(e, n) {
            return this.gameApi.userUpdateRockslams(
              n.userid,
              this.store.org.id,
              e,
              n.rockslamIds
            );
          }
          newRockSlam(e, n) {
            return this.gameApi.newRockslam(
              n.userid,
              this.store.org.id,
              n.opponent_id,
              e
            );
          }
          getRockslamGameData(e, n) {
            return e.map((o) => o.timeAnswered + "-" + (o.correct ? "y" : "n"));
          }
          getLegacyGameData(e, n) {
            const o = {
              game_name: null,
              answers: null,
              scGame: null,
              fines: null,
              session_id: null,
              game_length: null,
              atmLevel: null,
            };
            return (
              (o.atmLevel = n.atmLevel),
              (o.game_name = `${n.id}-${n.timestamp}-${n.roomId}`),
              (o.answers =
                "soundcheck" !== n.slug && "mtc" !== n.slug
                  ? JSON.stringify(this.userStats.getAnswers(e, n))
                  : null),
              (o.scGame =
                "soundcheck" === n.slug || "mtc" === n.slug
                  ? this.getSoundcheckData(e, n)
                  : null),
              (o.fines = n.fines),
              (o.game_length = n.length),
              o
            );
          }
          getClientInfo(e) {
            var n;
            return {
              game_created_at: +e.split("-")[1],
              user_id:
                null === (n = this.store.user) || void 0 === n ? void 0 : n.id,
              app_type: this.store.appType,
              app_version: this.appInfo.config.version,
              client_type: this.store.clientType,
              os_version: this.mobileService.osVersion(),
            };
          }
          getGameName() {
            if (
              this.store.org.chart_settings &&
              this.store.org.chart_settings.gameNameFormat
            )
              switch (this.store.org.chart_settings.gameNameFormat) {
                case "rock":
                  return this.store.user.rockname;
                case "real":
                  return this.store.isManager
                    ? `${this.store.user.salutation} ${this.store.user.lastName} `
                    : `${this.store.user.firstName} ${this.store.user.lastName} `;
                case "initial":
                  return this.store.isManager
                    ? `${this.store.user.salutation} ${this.store.user.lastName[0]} `
                    : `${this.store.user.firstName} ${this.store.user.lastName[0]} `;
              }
            return this.store.user.rockname;
          }
          getRealName() {
            var e, n, o, a;
            return null !==
              (n =
                null === (e = this.store.user) || void 0 === e
                  ? void 0
                  : e.ttrs) &&
              void 0 !== n &&
              n.anonymise
              ? this.translateService.instant("pupils")
              : "initial" ===
                (null ===
                  (a =
                    null === (o = this.store.org) || void 0 === o
                      ? void 0
                      : o.chart_settings) || void 0 === a
                  ? void 0
                  : a.gameNameFormat)
              ? this.store.isManager
                ? `${this.store.user.salutation} ${this.store.user.lastName[0]} `
                : `${this.store.user.firstName} ${this.store.user.lastName[0]} `
              : this.store.isManager
              ? `${this.store.user.salutation} ${this.store.user.lastName} `
              : `${this.store.user.firstName} ${this.store.user.lastName} `;
          }
          checkForCheats(e, n, o, a, c, u) {
            e > 300 ||
              (o.push(n),
              (o = o.filter((R) => R >= n - 30)).length >= 140 &&
                (this.gameApi.logCheat(this.store.user, u).subscribe(),
                this.goToCheatStage(a, c)));
          }
          recklessCounter(e, n, o, a) {
            n.push(e);
            const c = n.filter((u) => u.timeAnswered >= e.timeAnswered - 11);
            (n.length = 0),
              c.forEach((u) => n.push(u)),
              n.length >= 10 && this.goToRecklessStage(o, a);
          }
          getSoundcheckData(e, n) {
            const o = e.reduce((a, c) => (c.correct ? a + 1 : a), 0);
            return {
              answers: e,
              total_score: o,
              when_ts: n.timestamp,
              is_mtc: n.isMtcGame,
            };
          }
          saveSoundcheckData(e) {
            return this.data.post(
              { data: e, userid: this.store.user.id },
              "save_soundcheck",
              {
                title: "Error saving Soundcheck ",
                message:
                  "There was a problem saving your answers for this Soundcheck  Session",
              },
              "Soundcheck  Data saved",
              !1
            );
          }
          delayInbetweenQuestions(
            e,
            n,
            o,
            a = 25,
            c,
            u = !0,
            f = 6,
            g = !0,
            w,
            R
          ) {
            return e > a
              ? this.countdownTimer(g ? 5 : 0, 1e3)
              : (0, Ke.T)(
                  (0, I.of)("-"),
                  w
                    ? w.pipe(
                        (0, oe.h)((T) => T),
                        (0, ct.c)(
                          this.questionCountdown(e, n, a, f, 0, c, u, R)
                        )
                      )
                    : this.questionCountdown(e, n, a, f, o, c, u, R)
                );
          }
          shuffleQuestions(e) {
            let o,
              a,
              n = e.length;
            for (; 0 !== n; )
              (a = Math.floor(Math.random() * n)),
                (n -= 1),
                (o = e[n]),
                (e[n] = e[a]),
                (e[a] = o);
            return e;
          }
          shuffleFactors(e) {
            return (
              e.forEach((n) => {
                if (Math.random() > 0.5) {
                  const a = n.left;
                  (n.left = n.right), (n.right = a);
                }
              }),
              e
            );
          }
          generatePreQuestions(e) {
            const n = [];
            return (
              this.questionTypes(
                e.multiplicationRatio,
                e.divisionRatio,
                e.manualQuestionsLength
                  ? e.manualQuestionsLength
                  : e.length * this.questionLengthMultiplier
              ).forEach((a, c) => {
                const u = this.generateNewQuestion(e, c, a);
                n.push(u);
              }),
              n
            );
          }
          questionTypes(e, n, o) {
            let a = [];
            const c = e + n,
              f = (n / c) * o;
            return (
              (a = this.addIntoArray(a, "*", (e / c) * o)),
              (a = this.addIntoArray(a, "/", f)),
              this.shuffle(a),
              a
            );
          }
          addIntoArray(e, n, o) {
            for (let a = 0; a < o; a++) e.push(n);
            return e;
          }
          shuffle(e) {
            for (let n = e.length - 1; n > 0; n--) {
              const o = Math.floor(Math.random() * (n + 1));
              [e[n], e[o]] = [e[o], e[n]];
            }
          }
          clearBaselineCopy() {
            this.baselineService.clear(this.store.user.id);
          }
          defaultBaseline() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              return JSON.parse(yield this.gigApi.gigGameConfig());
            });
          }
          enqueueMusic() {
            const e = 60 * Math.ceil(this.remainingTime / 60);
            this.audioService
              .loadMusic(e > 180 ? 180 : e)
              .then((n) => this.audioService.playMusic());
          }
          subscribeStageChange(e, n) {
            e.subscribe((o) => {
              "game" === o.stage &&
                (this.timerSub$ && this.timerSub$.unsubscribe(),
                (this.timerSub$ = (0, Fe.H)(0, 1e3)
                  .pipe(
                    (0, k.b)((a) => (this.remainingTime = n - a)),
                    (0, Ie.o)((a) => a < n)
                  )
                  .subscribe()),
                this.store.settings.enableMusic && this.enqueueMusic()),
                "end" === o.stage &&
                  (this.timerSub$.unsubscribe(), this.stopMusic(!0));
            });
          }
          vibrate(e) {
            this.store.settings.enableVibrations &&
              ("ios" === this.store.appType && window.TapticEngine
                ? e > 100
                  ? window.TapticEngine.notification({ type: "error" })
                  : window.TapticEngine.impact({ style: "heavy" })
                : navigator && navigator.vibrate && navigator.vibrate(e));
          }
          playWrongAnswerSound() {
            (this.store.settings.enableSoundEffects ||
              this.speechService.speakerTurnedOn) &&
              this.audioService.playWrongAnswerSound();
          }
          detectChanges(e) {
            e.changeDetectorRef &&
              e.changeDetectorRef.detectChanges &&
              e.changeDetectorRef.detectChanges();
          }
        }
        return (
          (J.ɵfac = function (e) {
            return new (e || J)(
              C.LFG(m.O),
              C.LFG(O.d),
              C.LFG(Ae.D),
              C.LFG(v.U),
              C.LFG(Oe.f),
              C.LFG(ce.B),
              C.LFG(X.f),
              C.LFG(Pe.d),
              C.LFG(H.X),
              C.LFG(we.Q),
              C.LFG(Ve.f),
              C.LFG(re.z),
              C.LFG(Le.N),
              C.LFG(ht.V),
              C.LFG(ne.d),
              C.LFG(F),
              C.LFG(d.v),
              C.LFG(me.Wf),
              C.LFG(j.l),
              C.LFG(Ne.J),
              C.LFG(tt.n),
              C.LFG(W.W),
              C.LFG(et.J),
              C.LFG(st.sK)
            );
          }),
          (J.ɵprov = C.Yz7({ token: J, factory: J.ɵfac, providedIn: "root" })),
          J
        );
      })();
    },
    11059: (Me, pe, l) => {
      l.d(pe, { n: () => Pe });
      var D = l(70655),
        ne = l(58804),
        ce = l(83587),
        j = l(77812),
        N = l(50073),
        K = l(61031),
        C = l(95302),
        E = l(5e3);
      let F = (() => {
        class X {
          constructor(d, m, v) {
            (this.ttrsApi = d), (this.store = m), (this.offlineModeAuth3 = v);
          }
          playData() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const d =
                !!this.store.user.autoSchedule &&
                this.store.user.autoSchedule.gig &&
                this.store.user.autoSchedule.gig.settings;
              return yield this.ttrsApi
                .post(
                  {
                    minimalAtm: d,
                    userId: this.store.user.id,
                    orgId: this.store.org.id,
                  },
                  "Game",
                  "playData"
                )
                .toPromise()
                .then(
                  (m) => m,
                  (m) => (
                    console.error(m, "play data promise error"),
                    this.offlineModeAuth3.play2Data()
                  )
                );
            });
          }
        }
        return (
          (X.ɵfac = function (d) {
            return new (d || X)(E.LFG(K.s), E.LFG(ce.d), E.LFG(C.H));
          }),
          (X.ɵprov = E.Yz7({ token: X, factory: X.ɵfac, providedIn: "root" })),
          X
        );
      })();
      var W = l(58288),
        re = l(13428),
        Y = l(25766),
        Ee = l(31158),
        me = l(27754),
        Le = l(52704),
        we = l(17361),
        H = l(27737),
        Ae = l(92302);
      let Pe = (() => {
        class X {
          constructor(d, m, v, O, L, A, M, Se, ge, x, ee, I, Be) {
            (this.store = d),
              (this.router = m),
              (this.authUiService = v),
              (this.play2Api = O),
              (this.play2Store = L),
              (this.botwApi = A),
              (this.battleService = M),
              (this.battlesApi = Se),
              (this.sessionService = ge),
              (this.userStatsService = x),
              (this.autoScheduleService = ee),
              (this.familyService = I),
              (this.apiService = Be);
          }
          setupData() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const d = yield this.play2Api.playData(),
                m = this.battleService.cleanCompetitionListData(
                  this.battlesApi.processBotbs(null == d ? void 0 : d.battles)
                );
              (this.play2Store.battles = m),
                (this.play2Store.botws = this.botwApi.cleanBotwData(
                  d.botws,
                  this.store.user.id
                )),
                (this.play2Store.rockSlams = d.rockslams),
                (this.play2Store.bands = d.bands),
                (this.play2Store.sessions = d.sessions),
                (this.play2Store.last10StudioGames = d.last10StudioGames),
                (this.play2Store.settings = d.settings),
                (this.store.userStats.last10 = this.convertGameHistoryObjToArr(
                  d.last10StudioGames
                )),
                d.bands && this.updateBandsSetTables(d.bands),
                (this.store.org.chart_settings = Object.assign(
                  Object.assign({}, this.store.org.chart_settings),
                  d.settings
                )),
                yield this.userStatsService.updateScheduledTables(
                  this.store.user,
                  d.bands
                ),
                this.autoScheduleService.updateAtmProps(),
                this.apiService.retrySaves();
              const v =
                this.store.isFamily || this.store.isTutor
                  ? yield this.familyService.getPracticeSessions()
                  : d.sessions;
              this.setupPlayConfig(v),
                (this.store.userSessions = v),
                this.store.userSessions$.next(v),
                this.setupMtc(d.mtc);
            });
          }
          setupMtc(d) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              if (
                ((this.store.mtcUserActive = d),
                (null == d ? void 0 : d.active) &&
                  !1 === window.location.pathname.includes("mtc"))
              ) {
                let m = 0;
                return (
                  d.progress >= 1 && (m = 4),
                  console.log(m),
                  yield this.router.navigateByUrl(
                    this.router.createUrlTree(["/mtc/play/mtc"], {
                      queryParams: { mtcstage: m },
                    })
                  )
                );
              }
            });
          }
          setupPlayConfig(d) {
            const m = JSON.parse(JSON.stringify(W));
            m.games.forEach((v) => {
              var O;
              (null === (O = d.active) || void 0 === O ? void 0 : O.length) &&
                d.active.find(
                  (L) =>
                    !+L.outside_school_hours ||
                    this.sessionService.isOutsideSchoolHours(L)
                ) &&
                (v.open = !1),
                this.store.isFamily && (v.desc = v.familyDesc || v.desc);
            }),
              d.active.forEach((v) =>
                this.buildSessionInfo(v, !1, m.games, m.filters)
              ),
              d.completed.forEach((v) =>
                this.buildSessionInfo(v, !0, m.games, m.filters)
              ),
              m.games.find((v) => !!v.open) ||
                m.games.forEach((v) => (v.open = !0)),
              m.filters.forEach((v) => {
                v.openGames = m.games
                  .filter((O) => O.type === v.type)
                  .some((O) => O.open);
              }),
              (this.play2Store.config = m);
          }
          buildSessionInfo(d, m, v, O) {
            var L;
            if (
              +d.outside_school_hours &&
              !1 === this.sessionService.isOutsideSchoolHours(d)
            )
              return;
            const A = v.find((ee) => ee.id === d.game_type);
            if (!A) return;
            const M = +d.total_games,
              Se = +d.number_of_games,
              ge = m ? M + Se : M - Se;
            (null !== (L = null == A ? void 0 : A.session) &&
              void 0 !== L &&
              L.total) ||
              ((A.open = !0),
              (A.session.active = !0),
              (A.session.complete = ge),
              (A.session.total = M),
              (A.session.endDate = d.end));
            const x = O.find((ee) => ee.type === A.type);
            (x.sessions.active = !0),
              (x.sessions.total += M),
              (x.sessions.complete += ge);
          }
          startMultiGame(d) {
            (this.store.activeStage = d.stage), this.startGame(d.game, !0);
          }
          startGame(d, m = !1) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              if (m || this.store.offline) return this.goToPlayRoute(d);
              (yield this.authUiService.checkExpiredLoginTime()) ||
                this.goToPlayRoute(d);
            });
          }
          goToPlayRoute(d) {
            if (
              ("arena" === d.slug || "festival" === d.slug) &&
              this.store.isManager &&
              this.store.activeStage &&
              this.store.activeStage.spectate
            )
              return this.router.navigate([
                "game",
                "play",
                "spectate",
                d.slug,
                this.store.activeStage.timestamp,
              ]);
            let m = d.slug.toLowerCase();
            ((("garage" === d.slug || "baseline" === d.slug) &&
              this.store.gigGame &&
              this.store.allowAtmMode) ||
              "gig" === d.slug) &&
              (m = "baseline"),
              this.router.navigate(["game", "play", m]);
          }
          convertGameHistoryObjToArr(d) {
            if (!d || d === Array) return [];
            const m = [];
            for (const v in d)
              if (d.hasOwnProperty(v)) {
                const O = +d[v],
                  L = this.clean(Ee.unix(+v).fromNow()),
                  A = parseInt(v, 10);
                m.push({ score: O, when: L, timestamp: A });
              }
            return m.sort((v, O) => O.timestamp - v.timestamp);
          }
          clean(d) {
            return d.includes("few") ? d : d.replace(/(^an |a )/g, "1 ");
          }
          updateBandsSetTables(d) {
            !d ||
              !d.length ||
              d.forEach((m) => {
                if (m.tables)
                  if ("maths" === m.type) {
                    if (!this.store.studentMaths) return;
                    this.store.studentMaths.tables = m.tables;
                  } else if ("pastoral" === m.type) {
                    if (!this.store.studentPastoral) return;
                    this.store.studentPastoral.tables = m.tables;
                  }
              });
          }
        }
        return (
          (X.ɵfac = function (d) {
            return new (d || X)(
              E.LFG(ce.d),
              E.LFG(Ae.F0),
              E.LFG(ne.s),
              E.LFG(F),
              E.LFG(re.J),
              E.LFG(N.wX),
              E.LFG(j._),
              E.LFG(H.b),
              E.LFG(Y.mj),
              E.LFG(me.U),
              E.LFG(Le._),
              E.LFG(we.d),
              E.LFG(K.s)
            );
          }),
          (X.ɵprov = E.Yz7({ token: X, factory: X.ɵfac, providedIn: "root" })),
          X
        );
      })();
    },
    17361: (Me, pe, l) => {
      l.d(pe, { d: () => Pe });
      var D = l(70655),
        ne = l(29301),
        ce = l(73681),
        j = l(46475),
        N = l(84249),
        K = l(73354),
        C = l(21723),
        E = l(13428),
        F = l(91410),
        W = l(15439),
        Y = l(8929),
        Ee = l(21086),
        me = l(21492),
        Le = l(31938),
        we = l(12127),
        H = l(5e3),
        Ae = l(6937);
      let Pe = (() => {
        class X {
          constructor(d, m, v, O, L, A, M, Se, ge, x, ee, I) {
            (this.familyApi = d),
              (this.storage = m),
              (this.store = v),
              (this.timeService = O),
              (this.userService = L),
              (this.playLobbyService = A),
              (this.offlineMode = M),
              (this.auth = Se),
              (this.familyStore = ge),
              (this.play2Store = x),
              (this.gigApi = ee),
              (this.userStatsApi = I),
              (this.practiceGoalResults$ = new Y.xQ());
          }
          userLoggedIn(d, m = null) {
            var v, O;
            return (0, D.mG)(this, void 0, void 0, function* () {
              const L =
                (null === (v = d.org) || void 0 === v ? void 0 : v.id) ||
                (null === (O = d.organisation) || void 0 === O ? void 0 : O.id);
              return yield this.initUsers(L), this.auth.userLoggedIn(d, m);
            });
          }
          initUsers(d) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const [m, v] = yield this.getFamilyUsers(d);
              (this.familyStore.users = m.concat(v)),
                (this.store.managers = m),
                (this.store.orgStudents = v);
            });
          }
          getFamilyUsers(d) {
            return Promise.all([
              this.familyApi.adults(d).toPromise(),
              this.familyApi.children(d).toPromise(),
            ]);
          }
          getPracticeGoal(d) {
            return this.store.offline
              ? this.play2Store.practiceSettings
              : this.familyApi.practiceGoal(d);
          }
          getPracticeGoalResults(d, m) {
            return this.store.offline
              ? (0, Ee.of)(this.play2Store.goalResults)
              : this.familyApi.practiceGoalResults(d.id, m.month);
          }
          storeFamily(d) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              return d ? yield this.storage.setItem("family", d) : null;
            });
          }
          savePracticeGoalResults2() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const [d, m] = this.timeService.getYearMonthDaySeparately(
                  W().toDate()
                ),
                v = d + "" + m,
                O = yield this.play2Store.goalResults;
              return this.familyApi
                .practiceGoalResultsSave(this.store.user.id, v, O[v], !1)
                .toPromise();
            });
          }
          compareCachedResults(d) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const [m, v, O] = this.timeService.getYearMonthDaySeparately(
                  W().toDate()
                ),
                L = m + "" + v,
                A = yield this.play2Store.goalResults;
              return !A || !A[L] || (d && d[L] && d[L][O] > A[L][O]) ? d : A;
            });
          }
          getPracticeSessions() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const [d, m, v] = this.timeService.getYearMonthDaySeparately(
                W().toDate()
              );
              if (this.store.offline) {
                const A = yield this.play2Store.practiceSettings,
                  M = yield this.play2Store.goalResults;
                return (
                  (this.store.userSessions =
                    this.playLobbyService.practiceSettingsToSessions(
                      A || { enabled: !1 },
                      M,
                      d + "" + m,
                      v
                    )),
                  this.store.userSessions
                );
              }
              const [O, L] = yield Promise.all([
                this.familyApi.practiceGoal(this.store.user.id),
                this.familyApi
                  .practiceGoalResults(this.store.user.id, +(d + "" + m))
                  .toPromise(),
              ]);
              return (
                (this.play2Store.goalResults = yield this.compareCachedResults(
                  L
                )),
                (this.store.userSessions =
                  this.playLobbyService.practiceSettingsToSessions(
                    O,
                    L,
                    d + "" + m,
                    v
                  )),
                this.practiceGoalResults$.next(this.store.user.goalResults),
                this.store.userSessions
              );
            });
          }
          savePendingSettings() {
            var d;
            return (0, D.mG)(this, void 0, void 0, function* () {
              if (
                null === (d = this.store.user) ||
                void 0 === d ||
                !d.id ||
                this.store.offline
              )
                return;
              const m = yield this.familyStore.me;
              if (m) {
                if (yield this.familyStore.pendingUpdates(m.id, "setTables")) {
                  const L = yield this.play2Store.activeTables;
                  L &&
                    (this.userService.setTables(L, m.id).subscribe(),
                    (this.store.user.activeTables = L),
                    this.store.userStats &&
                      (this.store.userStats.scheduledTables = m.activeTables)),
                    yield this.familyStore.pendingUpdates(
                      m.id,
                      "setTables",
                      !1
                    );
                }
                if (
                  yield this.familyStore.pendingUpdates(
                    m.id,
                    "practiceSettings"
                  )
                ) {
                  const L = yield this.play2Store.practiceSettings;
                  L &&
                    (yield this.familyApi.practiceGoal(
                      m.id,
                      L.enabled,
                      L.mins_per_day
                    )),
                    yield this.familyStore.pendingUpdates(
                      m.id,
                      "practiceSettings",
                      !1
                    );
                }
              }
            });
          }
          isPracticeSessionGame(d) {
            return (
              (this.store.isFamily || this.store.isTutor) &&
              ("g" === d[0] || "b" === d[0])
            );
          }
          loginOffline({
            id: d,
            username: m,
            email: v,
            password: O,
            sklz: L,
            pw: A,
          }) {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const M = m || v,
                Se = this.offlineMode.getMd5Hash(O || A),
                ee = yield this.offlineMode.getOfflineData(M, "family", L);
              console.log(ee, "offline data");
              const I = d ? null : "family";
              return (
                I && (this.store.redirectUrl = null),
                ee && ee.hash && ee.hash !== Se
                  ? { password: !0 }
                  : ee && ee.hash
                  ? this.auth.userLoggedIn(ee, I, !0)
                  : { general: { status: 0 } }
              );
            });
          }
          storeFamilyUsersCachesForOfflineMode() {
            return (0, D.mG)(this, void 0, void 0, function* () {
              const d = [
                "userGigSettings",
                "gigGameConfig",
                "questionCache",
                "goalResults",
                "practiceSettings",
              ];
              (yield this.familyStore.users).forEach((v) => {
                setTimeout(() => {
                  d.forEach((O) =>
                    (0, D.mG)(this, void 0, void 0, function* () {
                      const L = this.formStoreKey(v.id, O);
                      if (!(yield this.cacheExists(L)))
                        if (-1 !== L.indexOf("userGigSettings")) {
                          const A = yield this.gigApi.userGigSettings(v.id);
                          yield this.familyStore.userGigSettings(v.id, A);
                        } else if (-1 !== L.indexOf("gigGameConfig"))
                          yield this.gigApi.gigGameConfig();
                        else if (-1 !== L.indexOf("questionCache")) {
                          const A = yield this.userStatsApi.liveQuestionCache(
                            v.id
                          );
                          this.familyStore.setQuestionCache(v.id, A);
                        } else if (-1 !== L.indexOf("practiceSettings")) {
                          const A = yield this.familyApi.practiceGoal(v.id);
                          this.familyStore.setPracticeSettings(v.id, A);
                        } else if (-1 !== L.indexOf("goalResults")) {
                          const [A, M] =
                              this.timeService.getYearMonthDaySeparately(
                                W().toDate()
                              ),
                            Se = yield this.familyApi
                              .practiceGoalResults(v.id, +(A + "" + M))
                              .toPromise();
                          this.familyStore.setGoalResults(v.id, Se);
                        }
                    })
                  );
                }, 2e3);
              });
            });
          }
          cacheExists(d) {
            return this.storage.getItem(d);
          }
          formStoreKey(d, m) {
            return "gigGameConfig" !== m ? `${d}.play2.${m}` : `play2.${m}`;
          }
        }
        return (
          (X.ɵfac = function (d) {
            return new (d || X)(
              H.LFG(ne.z),
              H.LFG(Ae.V),
              H.LFG(F.d),
              H.LFG(Le.O),
              H.LFG(we.K),
              H.LFG(C.u),
              H.LFG(me.g),
              H.LFG(N.e),
              H.LFG(K.K),
              H.LFG(E.J),
              H.LFG(ce.l),
              H.LFG(j.V)
            );
          }),
          (X.ɵprov = H.Yz7({ token: X, factory: X.ɵfac, providedIn: "root" })),
          X
        );
      })();
    },
    81547: (Me, pe, l) => {
      l.d(pe, { f: () => fe });
      var D = {};
      l.r(D),
        l.d(D, {
          Decoder: () => de,
          Encoder: () => z,
          PacketType: () => S,
          protocol: () => ye,
        });
      var ne = l(70655),
        ce = l(20923),
        j = l(9681),
        N = l(91410),
        K = l(96831),
        C = l(92198),
        E = l(24850);
      const F = Object.create(null);
      (F.open = "0"),
        (F.close = "1"),
        (F.ping = "2"),
        (F.pong = "3"),
        (F.message = "4"),
        (F.upgrade = "5"),
        (F.noop = "6");
      const W = Object.create(null);
      Object.keys(F).forEach((r) => {
        W[F[r]] = r;
      });
      const re = { type: "error", data: "parser error" },
        Y =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        Ee = "function" == typeof ArrayBuffer,
        we = (r, s) => {
          const t = new FileReader();
          return (
            (t.onload = function () {
              const i = t.result.split(",")[1];
              s("b" + (i || ""));
            }),
            t.readAsDataURL(r)
          );
        },
        H = ({ type: r, data: s }, t, i) =>
          Y && s instanceof Blob
            ? t
              ? i(s)
              : we(s, i)
            : Ee &&
              (s instanceof ArrayBuffer ||
                ((r) =>
                  "function" == typeof ArrayBuffer.isView
                    ? ArrayBuffer.isView(r)
                    : r && r.buffer instanceof ArrayBuffer)(s))
            ? t
              ? i(s)
              : we(new Blob([s]), i)
            : i(F[r] + (s || "")),
        Ae = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        Pe = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let r = 0; r < Ae.length; r++) Pe[Ae.charCodeAt(r)] = r;
      const d = "function" == typeof ArrayBuffer,
        v = (r, s) => {
          if (d) {
            const t = ((r) => {
              let i,
                p,
                b,
                se,
                Ce,
                s = 0.75 * r.length,
                t = r.length,
                h = 0;
              "=" === r[r.length - 1] && (s--, "=" === r[r.length - 2] && s--);
              const je = new ArrayBuffer(s),
                Ue = new Uint8Array(je);
              for (i = 0; i < t; i += 4)
                (p = Pe[r.charCodeAt(i)]),
                  (b = Pe[r.charCodeAt(i + 1)]),
                  (se = Pe[r.charCodeAt(i + 2)]),
                  (Ce = Pe[r.charCodeAt(i + 3)]),
                  (Ue[h++] = (p << 2) | (b >> 4)),
                  (Ue[h++] = ((15 & b) << 4) | (se >> 2)),
                  (Ue[h++] = ((3 & se) << 6) | (63 & Ce));
              return je;
            })(r);
            return O(t, s);
          }
          return { base64: !0, data: r };
        },
        O = (r, s) =>
          "blob" === s && r instanceof ArrayBuffer ? new Blob([r]) : r,
        L = (r, s) => {
          if ("string" != typeof r) return { type: "message", data: O(r, s) };
          const t = r.charAt(0);
          return "b" === t
            ? { type: "message", data: v(r.substring(1), s) }
            : W[t]
            ? r.length > 1
              ? { type: W[t], data: r.substring(1) }
              : { type: W[t] }
            : re;
        },
        A = String.fromCharCode(30);
      function x(r) {
        if (r)
          return (function ee(r) {
            for (var s in x.prototype) r[s] = x.prototype[s];
            return r;
          })(r);
      }
      (x.prototype.on = x.prototype.addEventListener =
        function (r, s) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + r] = this._callbacks["$" + r] || []).push(s),
            this
          );
        }),
        (x.prototype.once = function (r, s) {
          function t() {
            this.off(r, t), s.apply(this, arguments);
          }
          return (t.fn = s), this.on(r, t), this;
        }),
        (x.prototype.off =
          x.prototype.removeListener =
          x.prototype.removeAllListeners =
          x.prototype.removeEventListener =
            function (r, s) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var t = this._callbacks["$" + r];
              if (!t) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + r], this;
              for (var i, h = 0; h < t.length; h++)
                if ((i = t[h]) === s || i.fn === s) {
                  t.splice(h, 1);
                  break;
                }
              return 0 === t.length && delete this._callbacks["$" + r], this;
            }),
        (x.prototype.emitReserved = x.prototype.emit =
          function (r) {
            this._callbacks = this._callbacks || {};
            for (
              var s = new Array(arguments.length - 1),
                t = this._callbacks["$" + r],
                i = 1;
              i < arguments.length;
              i++
            )
              s[i - 1] = arguments[i];
            if (t) {
              i = 0;
              for (var h = (t = t.slice(0)).length; i < h; ++i)
                t[i].apply(this, s);
            }
            return this;
          }),
        (x.prototype.listeners = function (r) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + r] || []
          );
        }),
        (x.prototype.hasListeners = function (r) {
          return !!this.listeners(r).length;
        });
      const I =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this")();
      function Be(r, ...s) {
        return s.reduce(
          (t, i) => (r.hasOwnProperty(i) && (t[i] = r[i]), t),
          {}
        );
      }
      const it = I.setTimeout,
        $e = I.clearTimeout;
      function _e(r, s) {
        s.useNativeTimers
          ? ((r.setTimeoutFn = it.bind(I)), (r.clearTimeoutFn = $e.bind(I)))
          : ((r.setTimeoutFn = I.setTimeout.bind(I)),
            (r.clearTimeoutFn = I.clearTimeout.bind(I)));
      }
      function Fe(r) {
        return "string" == typeof r
          ? (function He(r) {
              let s = 0,
                t = 0;
              for (let i = 0, h = r.length; i < h; i++)
                (s = r.charCodeAt(i)),
                  s < 128
                    ? (t += 1)
                    : s < 2048
                    ? (t += 2)
                    : s < 55296 || s >= 57344
                    ? (t += 3)
                    : (i++, (t += 4));
              return t;
            })(r)
          : Math.ceil(1.33 * (r.byteLength || r.size));
      }
      class Xe extends Error {
        constructor(s, t, i) {
          super(s),
            (this.description = t),
            (this.context = i),
            (this.type = "TransportError");
        }
      }
      class Ke extends x {
        constructor(s) {
          super(),
            (this.writable = !1),
            _e(this, s),
            (this.opts = s),
            (this.query = s.query),
            (this.socket = s.socket);
        }
        onError(s, t, i) {
          return super.emitReserved("error", new Xe(s, t, i)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" === this.readyState || "open" === this.readyState) &&
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(s) {
          "open" === this.readyState && this.write(s);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(s) {
          const t = L(s, this.socket.binaryType);
          this.onPacket(t);
        }
        onPacket(s) {
          super.emitReserved("packet", s);
        }
        onClose(s) {
          (this.readyState = "closed"), super.emitReserved("close", s);
        }
        pause(s) {}
      }
      const We =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        k = {};
      let ue,
        xe = 0,
        be = 0;
      function _(r) {
        let s = "";
        do {
          (s = We[r % 64] + s), (r = Math.floor(r / 64));
        } while (r > 0);
        return s;
      }
      function ze() {
        const r = _(+new Date());
        return r !== ue ? ((xe = 0), (ue = r)) : r + "." + _(xe++);
      }
      for (; be < 64; be++) k[We[be]] = be;
      function Je(r) {
        let s = "";
        for (let t in r)
          r.hasOwnProperty(t) &&
            (s.length && (s += "&"),
            (s += encodeURIComponent(t) + "=" + encodeURIComponent(r[t])));
        return s;
      }
      let Ze = !1;
      try {
        Ze =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (r) {}
      const ot = Ze;
      function qe(r) {
        const s = r.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!s || ot))
            return new XMLHttpRequest();
        } catch (t) {}
        if (!s)
          try {
            return new I[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (t) {}
      }
      function at() {}
      const De = null != new qe({ xdomain: !1 }).responseType;
      let Ie = (() => {
        class r extends x {
          constructor(t, i) {
            super(),
              _e(this, i),
              (this.opts = i),
              (this.method = i.method || "GET"),
              (this.uri = t),
              (this.async = !1 !== i.async),
              (this.data = void 0 !== i.data ? i.data : null),
              this.create();
          }
          create() {
            const t = Be(
              this.opts,
              "agent",
              "pfx",
              "key",
              "passphrase",
              "cert",
              "ca",
              "ciphers",
              "rejectUnauthorized",
              "autoUnref"
            );
            (t.xdomain = !!this.opts.xd), (t.xscheme = !!this.opts.xs);
            const i = (this.xhr = new qe(t));
            try {
              i.open(this.method, this.uri, this.async);
              try {
                if (this.opts.extraHeaders) {
                  i.setDisableHeaderCheck && i.setDisableHeaderCheck(!0);
                  for (let h in this.opts.extraHeaders)
                    this.opts.extraHeaders.hasOwnProperty(h) &&
                      i.setRequestHeader(h, this.opts.extraHeaders[h]);
                }
              } catch (h) {}
              if ("POST" === this.method)
                try {
                  i.setRequestHeader(
                    "Content-type",
                    "text/plain;charset=UTF-8"
                  );
                } catch (h) {}
              try {
                i.setRequestHeader("Accept", "*/*");
              } catch (h) {}
              "withCredentials" in i &&
                (i.withCredentials = this.opts.withCredentials),
                this.opts.requestTimeout &&
                  (i.timeout = this.opts.requestTimeout),
                (i.onreadystatechange = () => {
                  4 === i.readyState &&
                    (200 === i.status || 1223 === i.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" == typeof i.status ? i.status : 0
                          );
                        }, 0));
                }),
                i.send(this.data);
            } catch (h) {
              return void this.setTimeoutFn(() => {
                this.onError(h);
              }, 0);
            }
            "undefined" != typeof document &&
              ((this.index = r.requestsCount++),
              (r.requests[this.index] = this));
          }
          onError(t) {
            this.emitReserved("error", t, this.xhr), this.cleanup(!0);
          }
          cleanup(t) {
            if (null != this.xhr) {
              if (((this.xhr.onreadystatechange = at), t))
                try {
                  this.xhr.abort();
                } catch (i) {}
              "undefined" != typeof document && delete r.requests[this.index],
                (this.xhr = null);
            }
          }
          onLoad() {
            const t = this.xhr.responseText;
            null !== t &&
              (this.emitReserved("data", t),
              this.emitReserved("success"),
              this.cleanup());
          }
          abort() {
            this.cleanup();
          }
        }
        return (r.requestsCount = 0), (r.requests = {}), r;
      })();
      function et() {
        for (let r in Ie.requests)
          Ie.requests.hasOwnProperty(r) && Ie.requests[r].abort();
      }
      "undefined" != typeof document &&
        ("function" == typeof attachEvent
          ? attachEvent("onunload", et)
          : "function" == typeof addEventListener &&
            addEventListener(
              "onpagehide" in I ? "pagehide" : "unload",
              et,
              !1
            ));
      const tt =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (s) => Promise.resolve().then(s)
            : (s, t) => t(s, 0),
        Ne = I.WebSocket || I.MozWebSocket,
        st =
          "undefined" != typeof navigator &&
          "string" == typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        J = {
          websocket: class lt extends Ke {
            constructor(s) {
              super(s), (this.supportsBinary = !s.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const s = this.uri(),
                t = this.opts.protocols,
                i = st
                  ? {}
                  : Be(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (i.headers = this.opts.extraHeaders);
              try {
                this.ws = st ? new Ne(s, t, i) : t ? new Ne(s, t) : new Ne(s);
              } catch (h) {
                return this.emitReserved("error", h);
              }
              (this.ws.binaryType = this.socket.binaryType || "arraybuffer"),
                this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (s) =>
                  this.onClose({
                    description: "websocket connection closed",
                    context: s,
                  })),
                (this.ws.onmessage = (s) => this.onData(s.data)),
                (this.ws.onerror = (s) => this.onError("websocket error", s));
            }
            write(s) {
              this.writable = !1;
              for (let t = 0; t < s.length; t++) {
                const h = t === s.length - 1;
                H(s[t], this.supportsBinary, (p) => {
                  try {
                    this.ws.send(p);
                  } catch (se) {}
                  h &&
                    tt(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), (this.ws = null));
            }
            uri() {
              let s = this.query || {};
              const t = this.opts.secure ? "wss" : "ws";
              let i = "";
              this.opts.port &&
                (("wss" === t && 443 !== Number(this.opts.port)) ||
                  ("ws" === t && 80 !== Number(this.opts.port))) &&
                (i = ":" + this.opts.port),
                this.opts.timestampRequests &&
                  (s[this.opts.timestampParam] = ze()),
                this.supportsBinary || (s.b64 = 1);
              const h = Je(s);
              return (
                t +
                "://" +
                (-1 !== this.opts.hostname.indexOf(":")
                  ? "[" + this.opts.hostname + "]"
                  : this.opts.hostname) +
                i +
                this.opts.path +
                (h.length ? "?" + h : "")
              );
            }
            check() {
              return !!Ne;
            }
          },
          polling: class ct extends Ke {
            constructor(s) {
              if (
                (super(s), (this.polling = !1), "undefined" != typeof location)
              ) {
                const i = "https:" === location.protocol;
                let h = location.port;
                h || (h = i ? "443" : "80"),
                  (this.xd =
                    ("undefined" != typeof location &&
                      s.hostname !== location.hostname) ||
                    h !== s.port),
                  (this.xs = s.secure !== i);
              }
              this.supportsBinary = De && !(s && s.forceBase64);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(s) {
              this.readyState = "pausing";
              const t = () => {
                (this.readyState = "paused"), s();
              };
              if (this.polling || !this.writable) {
                let i = 0;
                this.polling &&
                  (i++,
                  this.once("pollComplete", function () {
                    --i || t();
                  })),
                  this.writable ||
                    (i++,
                    this.once("drain", function () {
                      --i || t();
                    }));
              } else t();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(s) {
              ((r, s) => {
                const t = r.split(A),
                  i = [];
                for (let h = 0; h < t.length; h++) {
                  const p = L(t[h], s);
                  if ((i.push(p), "error" === p.type)) break;
                }
                return i;
              })(s, this.socket.binaryType).forEach((i) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === i.type &&
                    this.onOpen(),
                  "close" === i.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(i);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved("pollComplete"),
                  "open" === this.readyState && this.poll());
            }
            doClose() {
              const s = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? s() : this.once("open", s);
            }
            write(s) {
              (this.writable = !1),
                ((r, s) => {
                  const t = r.length,
                    i = new Array(t);
                  let h = 0;
                  r.forEach((p, b) => {
                    H(p, !1, (se) => {
                      (i[b] = se), ++h === t && s(i.join(A));
                    });
                  });
                })(s, (t) => {
                  this.doWrite(t, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              let s = this.query || {};
              const t = this.opts.secure ? "https" : "http";
              let i = "";
              !1 !== this.opts.timestampRequests &&
                (s[this.opts.timestampParam] = ze()),
                !this.supportsBinary && !s.sid && (s.b64 = 1),
                this.opts.port &&
                  (("https" === t && 443 !== Number(this.opts.port)) ||
                    ("http" === t && 80 !== Number(this.opts.port))) &&
                  (i = ":" + this.opts.port);
              const h = Je(s);
              return (
                t +
                "://" +
                (-1 !== this.opts.hostname.indexOf(":")
                  ? "[" + this.opts.hostname + "]"
                  : this.opts.hostname) +
                i +
                this.opts.path +
                (h.length ? "?" + h : "")
              );
            }
            request(s = {}) {
              return (
                Object.assign(s, { xd: this.xd, xs: this.xs }, this.opts),
                new Ie(this.uri(), s)
              );
            }
            doWrite(s, t) {
              const i = this.request({ method: "POST", data: s });
              i.on("success", t),
                i.on("error", (h, p) => {
                  this.onError("xhr post error", h, p);
                });
            }
            doPoll() {
              const s = this.request();
              s.on("data", this.onData.bind(this)),
                s.on("error", (t, i) => {
                  this.onError("xhr poll error", t, i);
                }),
                (this.pollXhr = s);
            }
          },
        },
        ae =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        e = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function n(r) {
        const s = r,
          t = r.indexOf("["),
          i = r.indexOf("]");
        -1 != t &&
          -1 != i &&
          (r =
            r.substring(0, t) +
            r.substring(t, i).replace(/:/g, ";") +
            r.substring(i, r.length));
        let h = ae.exec(r || ""),
          p = {},
          b = 14;
        for (; b--; ) p[e[b]] = h[b] || "";
        return (
          -1 != t &&
            -1 != i &&
            ((p.source = s),
            (p.host = p.host
              .substring(1, p.host.length - 1)
              .replace(/;/g, ":")),
            (p.authority = p.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (p.ipv6uri = !0)),
          (p.pathNames = (function o(r, s) {
            const i = s.replace(/\/{2,9}/g, "/").split("/");
            return (
              ("/" == s.slice(0, 1) || 0 === s.length) && i.splice(0, 1),
              "/" == s.slice(-1) && i.splice(i.length - 1, 1),
              i
            );
          })(0, p.path)),
          (p.queryKey = (function a(r, s) {
            const t = {};
            return (
              s.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (i, h, p) {
                h && (t[h] = p);
              }),
              t
            );
          })(0, p.query)),
          p
        );
      }
      let c = (() => {
        class r extends x {
          constructor(t, i = {}) {
            super(),
              (this.writeBuffer = []),
              t && "object" == typeof t && ((i = t), (t = null)),
              t
                ? ((t = n(t)),
                  (i.hostname = t.host),
                  (i.secure = "https" === t.protocol || "wss" === t.protocol),
                  (i.port = t.port),
                  t.query && (i.query = t.query))
                : i.host && (i.hostname = n(i.host).host),
              _e(this, i),
              (this.secure =
                null != i.secure
                  ? i.secure
                  : "undefined" != typeof location &&
                    "https:" === location.protocol),
              i.hostname && !i.port && (i.port = this.secure ? "443" : "80"),
              (this.hostname =
                i.hostname ||
                ("undefined" != typeof location
                  ? location.hostname
                  : "localhost")),
              (this.port =
                i.port ||
                ("undefined" != typeof location && location.port
                  ? location.port
                  : this.secure
                  ? "443"
                  : "80")),
              (this.transports = i.transports || ["polling", "websocket"]),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0),
              (this.opts = Object.assign(
                {
                  path: "/engine.io",
                  agent: !1,
                  withCredentials: !1,
                  upgrade: !0,
                  timestampParam: "t",
                  rememberUpgrade: !1,
                  addTrailingSlash: !0,
                  rejectUnauthorized: !0,
                  perMessageDeflate: { threshold: 1024 },
                  transportOptions: {},
                  closeOnBeforeunload: !0,
                },
                i
              )),
              (this.opts.path =
                this.opts.path.replace(/\/$/, "") +
                (this.opts.addTrailingSlash ? "/" : "")),
              "string" == typeof this.opts.query &&
                (this.opts.query = (function rt(r) {
                  let s = {},
                    t = r.split("&");
                  for (let i = 0, h = t.length; i < h; i++) {
                    let p = t[i].split("=");
                    s[decodeURIComponent(p[0])] = decodeURIComponent(p[1]);
                  }
                  return s;
                })(this.opts.query)),
              (this.id = null),
              (this.upgrades = null),
              (this.pingInterval = null),
              (this.pingTimeout = null),
              (this.pingTimeoutTimer = null),
              "function" == typeof addEventListener &&
                (this.opts.closeOnBeforeunload &&
                  ((this.beforeunloadEventListener = () => {
                    this.transport &&
                      (this.transport.removeAllListeners(),
                      this.transport.close());
                  }),
                  addEventListener(
                    "beforeunload",
                    this.beforeunloadEventListener,
                    !1
                  )),
                "localhost" !== this.hostname &&
                  ((this.offlineEventListener = () => {
                    this.onClose("transport close", {
                      description: "network connection lost",
                    });
                  }),
                  addEventListener("offline", this.offlineEventListener, !1))),
              this.open();
          }
          createTransport(t) {
            const i = Object.assign({}, this.opts.query);
            (i.EIO = 4), (i.transport = t), this.id && (i.sid = this.id);
            const h = Object.assign(
              {},
              this.opts.transportOptions[t],
              this.opts,
              {
                query: i,
                socket: this,
                hostname: this.hostname,
                secure: this.secure,
                port: this.port,
              }
            );
            return new J[t](h);
          }
          open() {
            let t;
            if (
              this.opts.rememberUpgrade &&
              r.priorWebsocketSuccess &&
              -1 !== this.transports.indexOf("websocket")
            )
              t = "websocket";
            else {
              if (0 === this.transports.length)
                return void this.setTimeoutFn(() => {
                  this.emitReserved("error", "No transports available");
                }, 0);
              t = this.transports[0];
            }
            this.readyState = "opening";
            try {
              t = this.createTransport(t);
            } catch (i) {
              return this.transports.shift(), void this.open();
            }
            t.open(), this.setTransport(t);
          }
          setTransport(t) {
            this.transport && this.transport.removeAllListeners(),
              (this.transport = t),
              t
                .on("drain", this.onDrain.bind(this))
                .on("packet", this.onPacket.bind(this))
                .on("error", this.onError.bind(this))
                .on("close", (i) => this.onClose("transport close", i));
          }
          probe(t) {
            let i = this.createTransport(t),
              h = !1;
            r.priorWebsocketSuccess = !1;
            const p = () => {
              h ||
                (i.send([{ type: "ping", data: "probe" }]),
                i.once("packet", (Qe) => {
                  if (!h)
                    if ("pong" === Qe.type && "probe" === Qe.data) {
                      if (
                        ((this.upgrading = !0),
                        this.emitReserved("upgrading", i),
                        !i)
                      )
                        return;
                      (r.priorWebsocketSuccess = "websocket" === i.name),
                        this.transport.pause(() => {
                          h ||
                            ("closed" !== this.readyState &&
                              (ut(),
                              this.setTransport(i),
                              i.send([{ type: "upgrade" }]),
                              this.emitReserved("upgrade", i),
                              (i = null),
                              (this.upgrading = !1),
                              this.flush()));
                        });
                    } else {
                      const Ye = new Error("probe error");
                      (Ye.transport = i.name),
                        this.emitReserved("upgradeError", Ye);
                    }
                }));
            };
            function b() {
              h || ((h = !0), ut(), i.close(), (i = null));
            }
            const se = (Qe) => {
              const Ye = new Error("probe error: " + Qe);
              (Ye.transport = i.name),
                b(),
                this.emitReserved("upgradeError", Ye);
            };
            function Ce() {
              se("transport closed");
            }
            function je() {
              se("socket closed");
            }
            function Ue(Qe) {
              i && Qe.name !== i.name && b();
            }
            const ut = () => {
              i.removeListener("open", p),
                i.removeListener("error", se),
                i.removeListener("close", Ce),
                this.off("close", je),
                this.off("upgrading", Ue);
            };
            i.once("open", p),
              i.once("error", se),
              i.once("close", Ce),
              this.once("close", je),
              this.once("upgrading", Ue),
              i.open();
          }
          onOpen() {
            if (
              ((this.readyState = "open"),
              (r.priorWebsocketSuccess = "websocket" === this.transport.name),
              this.emitReserved("open"),
              this.flush(),
              "open" === this.readyState && this.opts.upgrade)
            ) {
              let t = 0;
              const i = this.upgrades.length;
              for (; t < i; t++) this.probe(this.upgrades[t]);
            }
          }
          onPacket(t) {
            if (
              "opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState
            )
              switch (
                (this.emitReserved("packet", t),
                this.emitReserved("heartbeat"),
                t.type)
              ) {
                case "open":
                  this.onHandshake(JSON.parse(t.data));
                  break;
                case "ping":
                  this.resetPingTimeout(),
                    this.sendPacket("pong"),
                    this.emitReserved("ping"),
                    this.emitReserved("pong");
                  break;
                case "error":
                  const i = new Error("server error");
                  (i.code = t.data), this.onError(i);
                  break;
                case "message":
                  this.emitReserved("data", t.data),
                    this.emitReserved("message", t.data);
              }
          }
          onHandshake(t) {
            this.emitReserved("handshake", t),
              (this.id = t.sid),
              (this.transport.query.sid = t.sid),
              (this.upgrades = this.filterUpgrades(t.upgrades)),
              (this.pingInterval = t.pingInterval),
              (this.pingTimeout = t.pingTimeout),
              (this.maxPayload = t.maxPayload),
              this.onOpen(),
              "closed" !== this.readyState && this.resetPingTimeout();
          }
          resetPingTimeout() {
            this.clearTimeoutFn(this.pingTimeoutTimer),
              (this.pingTimeoutTimer = this.setTimeoutFn(() => {
                this.onClose("ping timeout");
              }, this.pingInterval + this.pingTimeout)),
              this.opts.autoUnref && this.pingTimeoutTimer.unref();
          }
          onDrain() {
            this.writeBuffer.splice(0, this.prevBufferLen),
              (this.prevBufferLen = 0),
              0 === this.writeBuffer.length
                ? this.emitReserved("drain")
                : this.flush();
          }
          flush() {
            if (
              "closed" !== this.readyState &&
              this.transport.writable &&
              !this.upgrading &&
              this.writeBuffer.length
            ) {
              const t = this.getWritablePackets();
              this.transport.send(t),
                (this.prevBufferLen = t.length),
                this.emitReserved("flush");
            }
          }
          getWritablePackets() {
            if (
              !(
                this.maxPayload &&
                "polling" === this.transport.name &&
                this.writeBuffer.length > 1
              )
            )
              return this.writeBuffer;
            let i = 1;
            for (let h = 0; h < this.writeBuffer.length; h++) {
              const p = this.writeBuffer[h].data;
              if ((p && (i += Fe(p)), h > 0 && i > this.maxPayload))
                return this.writeBuffer.slice(0, h);
              i += 2;
            }
            return this.writeBuffer;
          }
          write(t, i, h) {
            return this.sendPacket("message", t, i, h), this;
          }
          send(t, i, h) {
            return this.sendPacket("message", t, i, h), this;
          }
          sendPacket(t, i, h, p) {
            if (
              ("function" == typeof i && ((p = i), (i = void 0)),
              "function" == typeof h && ((p = h), (h = null)),
              "closing" === this.readyState || "closed" === this.readyState)
            )
              return;
            (h = h || {}).compress = !1 !== h.compress;
            const b = { type: t, data: i, options: h };
            this.emitReserved("packetCreate", b),
              this.writeBuffer.push(b),
              p && this.once("flush", p),
              this.flush();
          }
          close() {
            const t = () => {
                this.onClose("forced close"), this.transport.close();
              },
              i = () => {
                this.off("upgrade", i), this.off("upgradeError", i), t();
              },
              h = () => {
                this.once("upgrade", i), this.once("upgradeError", i);
              };
            return (
              ("opening" === this.readyState || "open" === this.readyState) &&
                ((this.readyState = "closing"),
                this.writeBuffer.length
                  ? this.once("drain", () => {
                      this.upgrading ? h() : t();
                    })
                  : this.upgrading
                  ? h()
                  : t()),
              this
            );
          }
          onError(t) {
            (r.priorWebsocketSuccess = !1),
              this.emitReserved("error", t),
              this.onClose("transport error", t);
          }
          onClose(t, i) {
            ("opening" === this.readyState ||
              "open" === this.readyState ||
              "closing" === this.readyState) &&
              (this.clearTimeoutFn(this.pingTimeoutTimer),
              this.transport.removeAllListeners("close"),
              this.transport.close(),
              this.transport.removeAllListeners(),
              "function" == typeof removeEventListener &&
                (removeEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                ),
                removeEventListener("offline", this.offlineEventListener, !1)),
              (this.readyState = "closed"),
              (this.id = null),
              this.emitReserved("close", t, i),
              (this.writeBuffer = []),
              (this.prevBufferLen = 0));
          }
          filterUpgrades(t) {
            const i = [];
            let h = 0;
            const p = t.length;
            for (; h < p; h++) ~this.transports.indexOf(t[h]) && i.push(t[h]);
            return i;
          }
        }
        return (r.protocol = 4), r;
      })();
      const g = "function" == typeof ArrayBuffer,
        R = Object.prototype.toString,
        T =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === R.call(Blob)),
        B =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === R.call(File));
      function U(r) {
        return (
          (g &&
            (r instanceof ArrayBuffer ||
              ((r) =>
                "function" == typeof ArrayBuffer.isView
                  ? ArrayBuffer.isView(r)
                  : r.buffer instanceof ArrayBuffer)(r))) ||
          (T && r instanceof Blob) ||
          (B && r instanceof File)
        );
      }
      function Q(r, s) {
        if (!r || "object" != typeof r) return !1;
        if (Array.isArray(r)) {
          for (let t = 0, i = r.length; t < i; t++) if (Q(r[t])) return !0;
          return !1;
        }
        if (U(r)) return !0;
        if (r.toJSON && "function" == typeof r.toJSON && 1 === arguments.length)
          return Q(r.toJSON(), !0);
        for (const t in r)
          if (Object.prototype.hasOwnProperty.call(r, t) && Q(r[t])) return !0;
        return !1;
      }
      function V(r) {
        const s = [],
          i = r;
        return (
          (i.data = te(r.data, s)),
          (i.attachments = s.length),
          { packet: i, buffers: s }
        );
      }
      function te(r, s) {
        if (!r) return r;
        if (U(r)) {
          const t = { _placeholder: !0, num: s.length };
          return s.push(r), t;
        }
        if (Array.isArray(r)) {
          const t = new Array(r.length);
          for (let i = 0; i < r.length; i++) t[i] = te(r[i], s);
          return t;
        }
        if ("object" == typeof r && !(r instanceof Date)) {
          const t = {};
          for (const i in r)
            Object.prototype.hasOwnProperty.call(r, i) && (t[i] = te(r[i], s));
          return t;
        }
        return r;
      }
      function $(r, s) {
        return (r.data = Z(r.data, s)), delete r.attachments, r;
      }
      function Z(r, s) {
        if (!r) return r;
        if (r && !0 === r._placeholder) {
          if ("number" == typeof r.num && r.num >= 0 && r.num < s.length)
            return s[r.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(r))
          for (let t = 0; t < r.length; t++) r[t] = Z(r[t], s);
        else if ("object" == typeof r)
          for (const t in r)
            Object.prototype.hasOwnProperty.call(r, t) && (r[t] = Z(r[t], s));
        return r;
      }
      const ie = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        ye = 5;
      var S = (() => {
        return (
          ((r = S || (S = {}))[(r.CONNECT = 0)] = "CONNECT"),
          (r[(r.DISCONNECT = 1)] = "DISCONNECT"),
          (r[(r.EVENT = 2)] = "EVENT"),
          (r[(r.ACK = 3)] = "ACK"),
          (r[(r.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (r[(r.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (r[(r.BINARY_ACK = 6)] = "BINARY_ACK"),
          S
        );
        var r;
      })();
      class z {
        constructor(s) {
          this.replacer = s;
        }
        encode(s) {
          return (s.type !== S.EVENT && s.type !== S.ACK) || !Q(s)
            ? [this.encodeAsString(s)]
            : this.encodeAsBinary({
                type: s.type === S.EVENT ? S.BINARY_EVENT : S.BINARY_ACK,
                nsp: s.nsp,
                data: s.data,
                id: s.id,
              });
        }
        encodeAsString(s) {
          let t = "" + s.type;
          return (
            (s.type === S.BINARY_EVENT || s.type === S.BINARY_ACK) &&
              (t += s.attachments + "-"),
            s.nsp && "/" !== s.nsp && (t += s.nsp + ","),
            null != s.id && (t += s.id),
            null != s.data && (t += JSON.stringify(s.data, this.replacer)),
            t
          );
        }
        encodeAsBinary(s) {
          const t = V(s),
            i = this.encodeAsString(t.packet),
            h = t.buffers;
          return h.unshift(i), h;
        }
      }
      function he(r) {
        return "[object Object]" === Object.prototype.toString.call(r);
      }
      class de extends x {
        constructor(s) {
          super(), (this.reviver = s);
        }
        add(s) {
          let t;
          if ("string" == typeof s) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet"
              );
            t = this.decodeString(s);
            const i = t.type === S.BINARY_EVENT;
            i || t.type === S.BINARY_ACK
              ? ((t.type = i ? S.EVENT : S.ACK),
                (this.reconstructor = new Ge(t)),
                0 === t.attachments && super.emitReserved("decoded", t))
              : super.emitReserved("decoded", t);
          } else {
            if (!U(s) && !s.base64) throw new Error("Unknown type: " + s);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet"
              );
            (t = this.reconstructor.takeBinaryData(s)),
              t &&
                ((this.reconstructor = null), super.emitReserved("decoded", t));
          }
        }
        decodeString(s) {
          let t = 0;
          const i = { type: Number(s.charAt(0)) };
          if (void 0 === S[i.type])
            throw new Error("unknown packet type " + i.type);
          if (i.type === S.BINARY_EVENT || i.type === S.BINARY_ACK) {
            const p = t + 1;
            for (; "-" !== s.charAt(++t) && t != s.length; );
            const b = s.substring(p, t);
            if (b != Number(b) || "-" !== s.charAt(t))
              throw new Error("Illegal attachments");
            i.attachments = Number(b);
          }
          if ("/" === s.charAt(t + 1)) {
            const p = t + 1;
            for (; ++t && "," !== s.charAt(t) && t !== s.length; );
            i.nsp = s.substring(p, t);
          } else i.nsp = "/";
          const h = s.charAt(t + 1);
          if ("" !== h && Number(h) == h) {
            const p = t + 1;
            for (; ++t; ) {
              const b = s.charAt(t);
              if (null == b || Number(b) != b) {
                --t;
                break;
              }
              if (t === s.length) break;
            }
            i.id = Number(s.substring(p, t + 1));
          }
          if (s.charAt(++t)) {
            const p = this.tryParse(s.substr(t));
            if (!de.isPayloadValid(i.type, p))
              throw new Error("invalid payload");
            i.data = p;
          }
          return i;
        }
        tryParse(s) {
          try {
            return JSON.parse(s, this.reviver);
          } catch (t) {
            return !1;
          }
        }
        static isPayloadValid(s, t) {
          switch (s) {
            case S.CONNECT:
              return he(t);
            case S.DISCONNECT:
              return void 0 === t;
            case S.CONNECT_ERROR:
              return "string" == typeof t || he(t);
            case S.EVENT:
            case S.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ("number" == typeof t[0] ||
                  ("string" == typeof t[0] && -1 === ie.indexOf(t[0])))
              );
            case S.ACK:
            case S.BINARY_ACK:
              return Array.isArray(t);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class Ge {
        constructor(s) {
          (this.packet = s), (this.buffers = []), (this.reconPack = s);
        }
        takeBinaryData(s) {
          if (
            (this.buffers.push(s),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const t = $(this.reconPack, this.buffers);
            return this.finishedReconstruction(), t;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function q(r, s, t) {
        return (
          r.on(s, t),
          function () {
            r.off(s, t);
          }
        );
      }
      const ke = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class P extends x {
        constructor(s, t, i) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = s),
            (this.nsp = t),
            i && i.auth && (this.auth = i.auth),
            (this._opts = Object.assign({}, i)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const s = this.io;
          this.subs = [
            q(s, "open", this.onopen.bind(this)),
            q(s, "packet", this.onpacket.bind(this)),
            q(s, "error", this.onerror.bind(this)),
            q(s, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...s) {
          return s.unshift("message"), this.emit.apply(this, s), this;
        }
        emit(s, ...t) {
          if (ke.hasOwnProperty(s))
            throw new Error('"' + s.toString() + '" is a reserved event name');
          if (
            (t.unshift(s),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(t), this;
          const i = { type: S.EVENT, data: t, options: {} };
          if (
            ((i.options.compress = !1 !== this.flags.compress),
            "function" == typeof t[t.length - 1])
          ) {
            const b = this.ids++,
              se = t.pop();
            this._registerAckCallback(b, se), (i.id = b);
          }
          return (
            (this.flags.volatile &&
              (!(
                this.io.engine &&
                this.io.engine.transport &&
                this.io.engine.transport.writable
              ) ||
                !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(i), this.packet(i))
                : this.sendBuffer.push(i)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(s, t) {
          var i;
          const h =
            null !== (i = this.flags.timeout) && void 0 !== i
              ? i
              : this._opts.ackTimeout;
          if (void 0 === h) return void (this.acks[s] = t);
          const p = this.io.setTimeoutFn(() => {
            delete this.acks[s];
            for (let b = 0; b < this.sendBuffer.length; b++)
              this.sendBuffer[b].id === s && this.sendBuffer.splice(b, 1);
            t.call(this, new Error("operation has timed out"));
          }, h);
          this.acks[s] = (...b) => {
            this.io.clearTimeoutFn(p), t.apply(this, [null, ...b]);
          };
        }
        emitWithAck(s, ...t) {
          const i =
            void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
          return new Promise((h, p) => {
            t.push((b, se) => (i ? (b ? p(b) : h(se)) : h(b))),
              this.emit(s, ...t);
          });
        }
        _addToQueue(s) {
          let t;
          "function" == typeof s[s.length - 1] && (t = s.pop());
          const i = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: s,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          s.push((h, ...p) =>
            i !== this._queue[0]
              ? void 0
              : (null !== h
                  ? i.tryCount > this._opts.retries &&
                    (this._queue.shift(), t && t(h))
                  : (this._queue.shift(), t && t(null, ...p)),
                (i.pending = !1),
                this._drainQueue())
          ),
            this._queue.push(i),
            this._drainQueue();
        }
        _drainQueue(s = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          const t = this._queue[0];
          (t.pending && !s) ||
            ((t.pending = !0),
            t.tryCount++,
            (this.flags = t.flags),
            this.emit.apply(this, t.args));
        }
        packet(s) {
          (s.nsp = this.nsp), this.io._packet(s);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((s) => {
                this._sendConnectPacket(s);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(s) {
          this.packet({
            type: S.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, s)
              : s,
          });
        }
        onerror(s) {
          this.connected || this.emitReserved("connect_error", s);
        }
        onclose(s, t) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", s, t);
        }
        onpacket(s) {
          if (s.nsp === this.nsp)
            switch (s.type) {
              case S.CONNECT:
                s.data && s.data.sid
                  ? this.onconnect(s.data.sid, s.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case S.EVENT:
              case S.BINARY_EVENT:
                this.onevent(s);
                break;
              case S.ACK:
              case S.BINARY_ACK:
                this.onack(s);
                break;
              case S.DISCONNECT:
                this.ondisconnect();
                break;
              case S.CONNECT_ERROR:
                this.destroy();
                const i = new Error(s.data.message);
                (i.data = s.data.data), this.emitReserved("connect_error", i);
            }
        }
        onevent(s) {
          const t = s.data || [];
          null != s.id && t.push(this.ack(s.id)),
            this.connected
              ? this.emitEvent(t)
              : this.receiveBuffer.push(Object.freeze(t));
        }
        emitEvent(s) {
          if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const i of t) i.apply(this, s);
          }
          super.emit.apply(this, s),
            this._pid &&
              s.length &&
              "string" == typeof s[s.length - 1] &&
              (this._lastOffset = s[s.length - 1]);
        }
        ack(s) {
          const t = this;
          let i = !1;
          return function (...h) {
            i || ((i = !0), t.packet({ type: S.ACK, id: s, data: h }));
          };
        }
        onack(s) {
          const t = this.acks[s.id];
          "function" == typeof t &&
            (t.apply(this, s.data), delete this.acks[s.id]);
        }
        onconnect(s, t) {
          (this.id = s),
            (this.recovered = t && this._pid === t),
            (this._pid = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((s) => this.emitEvent(s)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((s) => {
              this.notifyOutgoingListeners(s), this.packet(s);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((s) => s()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: S.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(s) {
          return (this.flags.compress = s), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(s) {
          return (this.flags.timeout = s), this;
        }
        onAny(s) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(s),
            this
          );
        }
        prependAny(s) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(s),
            this
          );
        }
        offAny(s) {
          if (!this._anyListeners) return this;
          if (s) {
            const t = this._anyListeners;
            for (let i = 0; i < t.length; i++)
              if (s === t[i]) return t.splice(i, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(s) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(s),
            this
          );
        }
        prependAnyOutgoing(s) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(s),
            this
          );
        }
        offAnyOutgoing(s) {
          if (!this._anyOutgoingListeners) return this;
          if (s) {
            const t = this._anyOutgoingListeners;
            for (let i = 0; i < t.length; i++)
              if (s === t[i]) return t.splice(i, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(s) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const i of t) i.apply(this, s.data);
          }
        }
      }
      function le(r) {
        (this.ms = (r = r || {}).min || 100),
          (this.max = r.max || 1e4),
          (this.factor = r.factor || 2),
          (this.jitter = r.jitter > 0 && r.jitter <= 1 ? r.jitter : 0),
          (this.attempts = 0);
      }
      (le.prototype.duration = function () {
        var r = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var s = Math.random(),
            t = Math.floor(s * this.jitter * r);
          r = 0 == (1 & Math.floor(10 * s)) ? r - t : r + t;
        }
        return 0 | Math.min(r, this.max);
      }),
        (le.prototype.reset = function () {
          this.attempts = 0;
        }),
        (le.prototype.setMin = function (r) {
          this.ms = r;
        }),
        (le.prototype.setMax = function (r) {
          this.max = r;
        }),
        (le.prototype.setJitter = function (r) {
          this.jitter = r;
        });
      class Re extends x {
        constructor(s, t) {
          var i;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            s && "object" == typeof s && ((t = s), (s = void 0)),
            ((t = t || {}).path = t.path || "/socket.io"),
            (this.opts = t),
            _e(this, t),
            this.reconnection(!1 !== t.reconnection),
            this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(t.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (i = t.randomizationFactor) && void 0 !== i ? i : 0.5
            ),
            (this.backoff = new le({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == t.timeout ? 2e4 : t.timeout),
            (this._readyState = "closed"),
            (this.uri = s);
          const h = t.parser || D;
          (this.encoder = new h.Encoder()),
            (this.decoder = new h.Decoder()),
            (this._autoConnect = !1 !== t.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(s) {
          return arguments.length
            ? ((this._reconnection = !!s), this)
            : this._reconnection;
        }
        reconnectionAttempts(s) {
          return void 0 === s
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = s), this);
        }
        reconnectionDelay(s) {
          var t;
          return void 0 === s
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = s),
              null === (t = this.backoff) || void 0 === t || t.setMin(s),
              this);
        }
        randomizationFactor(s) {
          var t;
          return void 0 === s
            ? this._randomizationFactor
            : ((this._randomizationFactor = s),
              null === (t = this.backoff) || void 0 === t || t.setJitter(s),
              this);
        }
        reconnectionDelayMax(s) {
          var t;
          return void 0 === s
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = s),
              null === (t = this.backoff) || void 0 === t || t.setMax(s),
              this);
        }
        timeout(s) {
          return arguments.length ? ((this._timeout = s), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(s) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new c(this.uri, this.opts);
          const t = this.engine,
            i = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const h = q(t, "open", function () {
              i.onopen(), s && s();
            }),
            p = q(t, "error", (b) => {
              i.cleanup(),
                (i._readyState = "closed"),
                this.emitReserved("error", b),
                s ? s(b) : i.maybeReconnectOnOpen();
            });
          if (!1 !== this._timeout) {
            const b = this._timeout;
            0 === b && h();
            const se = this.setTimeoutFn(() => {
              h(), t.close(), t.emit("error", new Error("timeout"));
            }, b);
            this.opts.autoUnref && se.unref(),
              this.subs.push(function () {
                clearTimeout(se);
              });
          }
          return this.subs.push(h), this.subs.push(p), this;
        }
        connect(s) {
          return this.open(s);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          const s = this.engine;
          this.subs.push(
            q(s, "ping", this.onping.bind(this)),
            q(s, "data", this.ondata.bind(this)),
            q(s, "error", this.onerror.bind(this)),
            q(s, "close", this.onclose.bind(this)),
            q(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(s) {
          try {
            this.decoder.add(s);
          } catch (t) {
            this.onclose("parse error", t);
          }
        }
        ondecoded(s) {
          tt(() => {
            this.emitReserved("packet", s);
          }, this.setTimeoutFn);
        }
        onerror(s) {
          this.emitReserved("error", s);
        }
        socket(s, t) {
          let i = this.nsps[s];
          return (
            i
              ? this._autoConnect && !i.active && i.connect()
              : ((i = new P(this, s, t)), (this.nsps[s] = i)),
            i
          );
        }
        _destroy(s) {
          const t = Object.keys(this.nsps);
          for (const i of t) if (this.nsps[i].active) return;
          this._close();
        }
        _packet(s) {
          const t = this.encoder.encode(s);
          for (let i = 0; i < t.length; i++) this.engine.write(t[i], s.options);
        }
        cleanup() {
          this.subs.forEach((s) => s()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(s, t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", s, t),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const s = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const i = this.setTimeoutFn(() => {
              s.skipReconnect ||
                (this.emitReserved("reconnect_attempt", s.backoff.attempts),
                !s.skipReconnect &&
                  s.open((h) => {
                    h
                      ? ((s._reconnecting = !1),
                        s.reconnect(),
                        this.emitReserved("reconnect_error", h))
                      : s.onreconnect();
                  }));
            }, t);
            this.opts.autoUnref && i.unref(),
              this.subs.push(function () {
                clearTimeout(i);
              });
          }
        }
        onreconnect() {
          const s = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", s);
        }
      }
      const Te = {};
      function G(r, s) {
        "object" == typeof r && ((s = r), (r = void 0));
        const t = (function f(r, s = "", t) {
            let i = r;
            (t = t || ("undefined" != typeof location && location)),
              null == r && (r = t.protocol + "//" + t.host),
              "string" == typeof r &&
                ("/" === r.charAt(0) &&
                  (r = "/" === r.charAt(1) ? t.protocol + r : t.host + r),
                /^(https?|wss?):\/\//.test(r) ||
                  (r = void 0 !== t ? t.protocol + "//" + r : "https://" + r),
                (i = n(r))),
              i.port ||
                (/^(http|ws)$/.test(i.protocol)
                  ? (i.port = "80")
                  : /^(http|ws)s$/.test(i.protocol) && (i.port = "443")),
              (i.path = i.path || "/");
            const p = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
            return (
              (i.id = i.protocol + "://" + p + ":" + i.port + s),
              (i.href =
                i.protocol +
                "://" +
                p +
                (t && t.port === i.port ? "" : ":" + i.port)),
              i
            );
          })(r, (s = s || {}).path || "/socket.io"),
          i = t.source,
          h = t.id;
        let Ce;
        return (
          s.forceNew ||
          s["force new connection"] ||
          !1 === s.multiplex ||
          (Te[h] && t.path in Te[h].nsps)
            ? (Ce = new Re(i, s))
            : (Te[h] || (Te[h] = new Re(i, s)), (Ce = Te[h])),
          t.query && !s.query && (s.query = t.queryKey),
          Ce.socket(t.path, s)
        );
      }
      Object.assign(G, { Manager: Re, Socket: P, io: G, connect: G });
      var y = l(5e3);
      let fe = (() => {
        class r {
          constructor(t, i, h) {
            (this.store = t),
              (this.jwt = i),
              (this.appInfo = h),
              (this.$listChange = new K.t(1)),
              (this.db = {});
          }
          update(t, i, h, p) {
            return (0, ne.mG)(this, void 0, void 0, function* () {
              this.getConnection().emit("update", {
                gameType: t,
                gameId: i,
                user: { id: this.store.user.id, c: h, w: p },
              });
            });
          }
          join(t, i) {
            return (0, ne.mG)(this, void 0, void 0, function* () {
              this.getConnection().emit(
                "join",
                {
                  gameType: t,
                  gameId: i,
                  user: {
                    id: this.store.user.id,
                    n: this.store.user.gameName,
                    i: this.store.user.gameAvatar,
                  },
                },
                (p) => this.updateGame(i, p)
              );
            });
          }
          leave(t, i) {
            return (0, ne.mG)(this, void 0, void 0, function* () {
              this.getConnection().emit("leave", {
                gameType: t,
                gameId: i,
                user: { id: this.store.user.id },
              });
            });
          }
          list(t, i) {
            const h = { gameType: t, gameId: i };
            return (
              this.getConnection().emit("list", h, (b) =>
                this.updateGame(i, b)
              ),
              this.$listChange.asObservable().pipe(
                (0, C.h)((b) => b.gameId === i),
                (0, E.U)((b) => b.data)
              )
            );
          }
          unsubscribeList(t, i) {
            return (0, ne.mG)(this, void 0, void 0, function* () {
              this.getConnection().emit("unsubscribeList", {
                gameType: t,
                gameId: i,
              });
            });
          }
          getGameRoomId(t, i) {
            return "f" === t ? `festival_${i}` : `arena_${i}`;
          }
          disconnect() {
            var t;
            null === (t = this.socket) || void 0 === t || t.disconnect(),
              (this.socket = null);
          }
          getConnection() {
            return (
              this.socket ||
                ((this.socket = G(this.appInfo.config.rockbaseAPI, {
                  secure: !0,
                  auth: { token: this.jwt.jwt },
                  transports: ["websocket"],
                })),
                this.socket.on("u", (i) =>
                  this.updateGame(i.gameId, { [i.user.id]: i.user })
                ),
                this.socket.on("r", (i) =>
                  this.deleteGameUser(i.gameId, i.userId)
                ),
                this.socket.on("vc", (i) =>
                  this.updateGameUserState(i.gameId, {
                    id: i.user.id,
                    c: i.user.c,
                    w: i.user.w,
                  })
                )),
              this.socket
            );
          }
          updateGame(t, i) {
            (this.db[t] = this.db[t] || {}),
              Object.keys(i).forEach((h) => (this.db[t][h] = i[h])),
              this.$listChange.next({
                gameId: t,
                data: Object.keys(this.db[t]).map((h) => this.db[t][h]),
              });
          }
          deleteGameUser(t, i) {
            this.db[t] && this.db[t][i] && delete this.db[t][i],
              this.$listChange.next({
                gameId: t,
                data: this.db[t]
                  ? Object.keys(this.db[t]).map((h) => this.db[t][h])
                  : [],
              });
          }
          updateGameUserState(t, i) {
            this.db[t] &&
              this.db[t][i.id] &&
              ((this.db[t][i.id].c = i.c), (this.db[t][i.id].w = i.w)),
              this.$listChange.next({
                gameId: t,
                data: Object.keys(this.db[t]).map((h) => this.db[t][h]),
              });
          }
        }
        return (
          (r.ɵfac = function (t) {
            return new (t || r)(y.LFG(N.d), y.LFG(ce.T), y.LFG(j.z));
          }),
          (r.ɵprov = y.Yz7({ token: r, factory: r.ɵfac, providedIn: "root" })),
          r
        );
      })();
    },
    2313: (Me, pe, l) => {
      l.d(pe, { c: () => ne });
      var D = l(87545);
      function ne(ce, j) {
        return j ? (0, D.w)(() => ce, j) : (0, D.w)(() => ce);
      }
    },
    58288: (Me) => {
      Me.exports = JSON.parse(
        '{"games":[{"id":"jamming","desc":"PLAY.gameModeDesc.jammin","image":"Jammin","open":true,"type":"single","session":{"active":false,"total":0,"complete":0}},{"id":"gig","desc":"PLAY.gameModeDesc.gig","image":"Baseline","open":true,"type":"single","session":{"active":false,"total":0,"complete":0}},{"id":"garage","desc":"PLAY.gameModeDesc.garage","image":"Garage","open":true,"type":"single","session":{"active":false,"total":0,"complete":0}},{"id":"studio","desc":"PLAY.gameModeDesc.studio","image":"Studio","open":true,"type":"single","session":{"active":false,"total":0,"complete":0}},{"id":"soundcheck","desc":"PLAY.gameModeDesc.soundcheck","image":"Soundcheck","open":true,"type":"single","session":{"active":false,"total":0,"complete":0}},{"id":"festival","desc":"PLAY.gameModeDesc.festival","image":"Festival","open":true,"type":"multi","session":{"active":false,"total":0,"complete":0}},{"id":"arena","desc":"PLAY.gameModeDesc.arena","familyDesc":"PLAY.gameModeDesc.arenaFamily","image":"Arena","open":true,"type":"multi","session":{"active":false,"total":0,"complete":0}},{"id":"rockslam","desc":"PLAY.gameModeDesc.rockslam","image":"RockSlam","open":true,"type":"multi","session":{"active":false,"total":0,"complete":0}}],"filters":[{"name":"PLAY.gameListTitle.singlePlayer","type":"single","img":"single-player-icon.png","sessions":{"active":false,"total":0,"complete":0},"openGames":true},{"name":"PLAY.gameListTitle.multiPlayer","type":"multi","img":"multiplayer-icon.png","sessions":{"active":false,"total":0,"complete":0},"openGames":true}]}'
      );
    },
  },
]);
